import React from 'react';
import data from './data/Data';
import Question from "./Question";
import Results from "./Results";
import Progress from "./Progress";
import Arrow from "./Arrow";
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
            loadingResults: false,
            correctAnswers: null
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

    goToPrevQuestion = () => {
        const {progress, allQuestions} = this.state;

        this.setState({
            loadNewQuestion: true
        });

        setTimeout(()=> {
            this.setState({
                progress: progress - 1,
                loadNewQuestion: false,
                currentQuestion: allQuestions[progress - 1]
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
                correctAnswers: ['KLM','Port of Shanghai', '337.60 km', '590 km/h', '2617 km']
            });
        }, 1000)
    };
    render(){
        const {currentQuestion, loadNewQuestion, progress, showResults, allQuestions, allAnswers, loadingResults, resultsLoaded, correctAnswers} = this.state;

        const navIsActive = allAnswers.length > 0;
        return (
            <div className={`${loadingResults ? 'is-loading-results' : ''} ${resultsLoaded ? 'is-showing-results' : 'no-results-loaded'}`}>
                  
              {/* Header - start */}
              <header>
                  <img
                      className={`fade-out ${loadNewQuestion ? 'fade-out-active' : ''}`}
                      src="https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg" />
              </header>
              {/* Header - end */}
              {/* Content - start */}
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
                          loadNewQuestion={loadNewQuestion}/>
                  }
              </div>
              {/* Content - end */}

              {/* Navigation - start */}
              <div className={`navigation text-center ${navIsActive ? 'is-active' : ''}`}>
                <Arrow direction="left"
                       goToPrevQuestion={this.goToPrevQuestion}
                       progress={progress}
                       allAnswers={allAnswers}/>
                <Arrow direction="right"
                       goToNextQuestion={this.goToNextQuestion}
                       progress={progress}
                       allAnswers={allAnswers}/>
              </div>
              {/* Navigation - end */}

            </div>
        )
    }
}

export default App;