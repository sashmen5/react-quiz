import React from 'react';
import data from './data/Data';
import Question from "./Question";
import Results from "./Results";
import Progress from "./Progress";
import Arrow from "./Arrow";
import defaultImage from '../images/truck.svg';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allQuestions: data.allQuestions,
            currentQuestion: data.allQuestions[0],
            progress: 0,
            allAnswers: [],
            resultsLoaded: false,
            loadNewQuestion: false,
            showResults: false,
            loadingResults: false,
            correctAnswers: null
        }
    }

    onSelectAnswer = (answer) => {
        const {allAnswers, progress} = this.state;
        const currentAnswer = allAnswers[progress];

        if (currentAnswer) {
            allAnswers[progress] = answer;
            this.setState({
                allAnswers
            }, this.goToNextQuestion())
        } else {
            this.setState({
                allAnswers: [...allAnswers, answer]
            }, this.goToNextQuestion())
        }
    };

    goToNextQuestion = () => {
        const {progress, allQuestions} = this.state;

        this.setState({
            loadNewQuestion: true
        });

        setTimeout(() => {
            if (progress < allQuestions.length - 1) {
                this.setState({
                    progress: progress + 1,
                    currentQuestion: allQuestions[progress + 1],
                    loadNewQuestion: false
                })
            } else {
                this.setState({
                    loadNewQuestion: false,
                    showResults: true
                })
            }
        }, 300)
    };

    goToPreviousQuestion = () => {
        const {progress, allQuestions, showResults} = this.state;
        this.setState({
            loadNewQuestion: true
        });
        setTimeout(() => {
            (progress > 0 && !showResults) && this.setState({
                progress: progress - 1,
                loadNewQuestion: false,
                currentQuestion: allQuestions[progress - 1]
            });
            showResults && this.setState({
                showResults: false,
                loadNewQuestion: false
            })
        }, 300)
    };

    onLoadResults = () => {
        this.setState({
            loadingResults: true
        });

        setTimeout(() => {
            this.setState({
                loadingResults: false,
                resultsLoaded: true,
                correctAnswers: ['KLM', 'Port of Shanghai', '337.60 km', '590 km/h', '2617 km']
            });
        }, 1000)
    };

    onRestart = () => {
        this.setState({
            currentQuestion: this.state.allQuestions[0],
            correctAnswers: null,
            allAnswers: [],
            progress: 0,
            resultsLoaded: false,
            showResults: false,
        })
    };

    render() {
        const {currentQuestion, loadNewQuestion, progress, showResults, allQuestions, allAnswers, loadingResults, resultsLoaded, correctAnswers} = this.state;


        const {image} = currentQuestion;
        const headerImage = !showResults ? image : defaultImage;
        const navIsActive = allAnswers.length > 0;
        return (
            <div
                className={`${loadingResults ? 'is-loading-results' : ''} ${resultsLoaded ? 'is-showing-results' : 'no-results-loaded'}`}>
                <header>
                    <img
                        className={`fade-out ${loadNewQuestion ? 'fade-out-active' : ''}`}
                        src={headerImage}/>
                </header>
                <div className={`content`}>
                    <Progress total={allQuestions.length} progress={allAnswers.length}/>

                    {
                        !showResults ? <Question
                            allAnswers={allAnswers}
                            onSelectAnswer={this.onSelectAnswer}
                            loadNewQuestion={loadNewQuestion}
                            currentQuestion={currentQuestion}
                        /> : <Results
                            onLoadResults={this.onLoadResults}
                            correctAnswers={correctAnswers}
                            allAnswers={allAnswers}
                            allQuestions={allQuestions}
                            onRestart={this.onRestart}
                            resultsLoaded={resultsLoaded}
                            loadNewQuestion={loadNewQuestion}/>
                    }
                </div>
                <div className={`navigation text-center ${navIsActive ? 'is-active' : ''}`}>
                    <Arrow direction="left"
                           goToPrevQuestion={this.goToPreviousQuestion}
                           progress={progress}
                           showResults={showResults}
                           allAnswers={allAnswers}/>
                    <Arrow direction="right"
                           goToNextQuestion={this.goToNextQuestion}
                           progress={progress}
                           showResults={showResults}
                           allAnswers={allAnswers}/>
                </div>
            </div>
        )
    }
}

export default App;