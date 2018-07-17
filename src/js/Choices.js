import React from 'react';
import PropTypes from 'prop-types';
import NiceButton from "./NiceButton";

const Choices = ({choices, onSelectAnswer, allAnswers}) => {
    return (
        <div className="choices">
            {
                choices.map((choice, index) => {
                    return <NiceButton
                        choice={choice}
                        key={choice}
                        allAnswers={allAnswers}
                        onSelectAnswer={onSelectAnswer}
                        index={index}/>
                })
            }
        </div>
    );
};

Choices.propTypes = {
    choices: PropTypes.array.isRequired,
    allAnswers: PropTypes.array.isRequired,
    onSelectAnswer: PropTypes.func.isRequired
};

export default Choices;