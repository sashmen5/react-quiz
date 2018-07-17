import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({total, progress}) => {
    const totalPersentage = progress > 0 ? 100 / (total / progress) : 0;
    return (
        <div className="progress-container">
            <div className="progress-label">{progress} of {total} answered</div>
            <div className="progress">
                <div className="progress-bar" style={{'width': `${totalPersentage}%`}}>
                    <span className="sr-only">{`${totalPersentage}% Complete`}</span>
                </div>
            </div>
        </div>
    )
};

Progress.propTypes = {
    total: PropTypes.node.isRequired,
    progress: PropTypes.node.isRequired
};

export default Progress;