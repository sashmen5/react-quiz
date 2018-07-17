import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NiceButton  extends Component {
    getLetter = (index) => {
        const letters = ['A', 'B', 'C', 'D'];
        return letters[index];
    };
    render() {
        const {choice, index} = this.props;
        return (
            <button className="btn btn-huge"><span className="letter">{this.getLetter(index)}</span>{choice}</button>
        );
    }
}

NiceButton.propTypes = {
    choice: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
};

export default NiceButton;