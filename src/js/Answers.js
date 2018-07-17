import React from 'react';
import PropTypes from 'prop-types';

const Answers = ({allAnswers, allQuestions}) => {
    return (
        <ol>
            <li>What is the best city in the world? <br /><strong>Melbourne</strong></li>
            <li>What is the best city in the world? <br /><strong>Melbourne</strong></li>
            <li>What is the best city in the world? <br /><strong>Melbourne</strong></li>
            <li>What is the best city in the world? <br /><strong>Melbourne</strong></li>
        </ol>
    )
};

Answers.propTypes = {
    allAnswers: PropTypes.array.isRequired,
    allQuestions: PropTypes.array.isRequired,
};

export default Answers;
