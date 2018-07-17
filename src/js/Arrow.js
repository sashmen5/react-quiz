import React from 'react';
import PropTypes from 'prop-types';
import arrowLeftImg from '../images/navigation-left-arrow.svg';
import arrowRightImg from '../images/navigation-right-arrow.svg';

const Arrow = ({direction, progress, allAnswers, goToPrevQuestion, goToNextQuestion}) => {
    const image = direction === 'left' ? arrowLeftImg : arrowRightImg;
    const isDisabled = (direction === 'left' && progress === 0) ||
                       (direction === 'right' && !allAnswers[progress]);
    return (
        <button
            disabled={isDisabled}
            onClick={() => {
                direction === 'left' ? goToPrevQuestion() : goToPrevQuestion();
            }}
            className={`arrow ${isDisabled ? 'is-disabled' : ''}`}>
            <img src={image} />
        </button>
    )
};

Arrow.propTypes = {
    direction: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    allAnswers: PropTypes.array.isRequired,
    goToPrevQuestion: PropTypes.func,
    goToNextQuestion: PropTypes.func
};

export default Arrow;