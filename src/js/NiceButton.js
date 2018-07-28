import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NiceButton  extends Component {
    get selected() {
        const {allAnswers, choice} = this.props;
        return allAnswers.includes(choice);
    }

    getLetter = (index) => {
        const letters = ['A', 'B', 'C', 'D'];
        return letters[index];
    };

    handleClick = () => {
        const {choice, onSelectAnswer} = this.props;
        this.button.classList.add('is-selected', 'is-highlighted');
        setTimeout(() => {
            onSelectAnswer(choice);
        }, 500);
    };

    render() {
        const {choice, index} = this.props;
        return (
            <button
                ref={(input) => this.button = input}
                className={`btn btn-huge ${this.selected ? 'is-selected' : 'is-highlighted'}`}
                onClick={this.handleClick}
            ><span className="letter">{this.getLetter(index)}</span>{choice}</button>
        );
    }
}

NiceButton.propTypes = {
    choice: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    allAnswers: PropTypes.array.isRequired,
    onSelectAnswer: PropTypes.func.isRequired
};

export default NiceButton;