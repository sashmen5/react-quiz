import React from 'react';
import data from './data/Data';
import Question from "./Question";
import Results from "./Results";
class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            allQuestions: data.allQuestions,
            currentQuestion: data.allQuestions[0],
            progress: 0,
            allAnswers: [],
            loadNewQuestion: false,
            showResults: false,
            loadingResults: false
        }
    }

    onSelectAnswer = (answer) => {
        //console.log('Answer selected ' + answer);
        const {allAnswers} = this.state;
        this.setState({
            allAnswers: [...allAnswers, answer]
        }, this.goToNextQuestion())
    };

    goToNextQuestion = () => {
        console.log('go next');
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
                });
            } else {
                this.setState({
                    loadNewQuestion: false,
                    showResults: true
                });
            }
        }, 300);
    };

    onLoadResults = () => {
        this.setState({
            loadingResults: true
        });

        setTimeout(() => {
            this.setState({
                loadingResults: false,
                resultsLoaded: true,
                correctAnswers: ['KLM','Port of Shanghai', '337.60 km', '590 km/h', '2617 km']
            });
        }, 1000)
    };
    render(){
        const {currentQuestion, loadNewQuestion, showResults, allQuestions, allAnswers, loadingResults} = this.state;

        return (
            <div className={`${loadingResults ? 'is-loading-results' : ''}`}>
                  
              {/* Header - start */}
              <header>
                  <img
                      className={`fade-out ${loadNewQuestion ? 'fade-out-active' : ''}`}
                      src="https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg" />
              </header>
              {/* Header - end */}

              {/* Content - start */}
              <div className={`content`}>

                {/* Progress - start */}
                <div className="progress-container">
                  <div className="progress-label">1 of 5 answered</div>
                  <div className="progress">
                    <div className="progress-bar" style={{'width': `20%`}}>
                      <span className="sr-only">20% Complete</span>
                    </div>
                  </div>
                </div>
                {/* Progress - end */}
                  {
                      !showResults ? <Question
                          onSelectAnswer={this.onSelectAnswer}
                          loadNewQuestion={loadNewQuestion}
                          currentQuestion={currentQuestion}
                      /> : <Results
                          onLoadResults={this.onLoadResults}
                          allAnswers={allAnswers}
                          allQuestions={allQuestions}
                          loadNewQuestion={loadNewQuestion}/>
                  }
              </div>
              {/* Content - end */}

              {/* Navigation - start */}
              <div className={`navigation text-center is-active`}>
                <button className={`arrow`}>
                    <img src="https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/navigation-left-arrow.svg" />
                </button>
                <button disabled className={`arrow is-disabled`}>
                    <img src="https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/navigation-right-arrow.svg" />
                </button>
              </div>
              {/* Navigation - end */}

            </div>
        )
    }
}

export default App;