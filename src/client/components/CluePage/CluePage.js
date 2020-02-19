import React from 'react';
import './CluePage.css';

class CluePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAnswer: false
    }
  }

  toggleDisplayAnswer() {
    this.setState(prevState => ({
      displayAnswer: !prevState.displayAnswer
    }));
  }


  render() {
    // set text to either the question or the answer, depending on if the button was clicked
    const text = this.state.displayAnswer ? this.props.clue.answer : this.props.clue.question;
    return (
      <div className="clue-page">
        <div className={this.state.displayAnswer ? "text answer-text" : "text clue-text"}>
          {text.toUpperCase()}
        </div>
        <div className="button-container">
          <button onClick={() => {this.props.hideCluePage()}}>
            Back
          </button>
          <button onClick={() => {this.toggleDisplayAnswer()}}>
            {this.state.displayAnswer ? "Hide Answer" : "View Answer"}
          </button>
        </div>
      </div>
    )
  }
}

export default CluePage;