import React from 'react';
import PropTypes from 'prop-types';
import Answers from "./Answers";

const Results = ({loadNewQuestion, allAnswers, allQuestions, onLoadResults, correctAnswers, resultsLoaded, onRestart}) => {
    let numberOfCorrect = 0;
    correctAnswers && allQuestions.map((questions, index) => {
        correctAnswers[index] === allAnswers[index] && numberOfCorrect++;
    });

    return (
        <div className={`results fade-out ${loadNewQuestion ? 'fade-out-active' : ''}`}>
            <div className="loader">
                <div className="icon"></div>
            </div>
            <div className="results-overlay"></div>
            <h1>{`${resultsLoaded ? `${numberOfCorrect} out of ${allQuestions.length} correct!` : 'Here are your answers:'}`}</h1>
            <div className="answers">
                <Answers
                    allAnswers={allAnswers}
                    correctAnswers={correctAnswers}
                    allQuestions={allQuestions}/>
            </div>
            <div className="text-center">
                {
                    resultsLoaded ?
                        <button className="btn btn-dark" onClick={(e)=> { onRestart(); }}>Start Again</button> :
                        <button className="btn btn-dark" onClick={(e)=> { onLoadResults(); }}>Submit</button>
                }
            </div>
        </div>
    )
};

Results.propTypes = {
    loadNewQuestion: PropTypes.bool.isRequired,
    allAnswers: PropTypes.array.isRequired,
    allQuestions: PropTypes.array.isRequired,
    correctAnswers: PropTypes.array,
    onLoadResults: PropTypes.func.isRequired,
    onRestart: PropTypes.func.isRequired,
    resultsLoaded: PropTypes.bool.isRequired,
};

export default Results;
