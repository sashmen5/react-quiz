import React from 'react';
import PropTypes from 'prop-types';
import NiceButton from "./NiceButton";

const Choices = ({choices}) => {
    return (
        <div className="choices">
            {
                choices.map((choice, index) => {
                    return <NiceButton choice={choice} key={choice} index={index}/>
                })
            }
        </div>
    );
};

Choices.propTypes = {
    choices: PropTypes.array.isRequired
};

export default Choices;