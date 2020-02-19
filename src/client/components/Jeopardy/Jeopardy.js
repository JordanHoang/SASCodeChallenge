import React from 'react';
import GameBoard from '../GameBoard/GameBoard';
import CluePage from '../CluePage/CluePage';
import { clues } from '../../../../mock-data.js';

class Jeopardy extends React.Component {
  constructor() {
    super();

    this.state = {
      clues: clues, // Collection, where each element in the array is a category Object that contains category data and a 
      displayCluePage: false // determines whether to show the game board, or to show the selected clue
    }
  }

  renderCluePage(selectedClue) {
    console.log('this.selectedClue', selectedClue);
    this.setState({
      displayCluePage: true,
      selectedClue: selectedClue
    });
  }

  hideCluePage() {
    this.setState({
      displayCluePage: false,
      selectedClue: null
    });
  }

  render() {
    return (
      <div>
        <h1>Mini Jeopardy</h1>
        {
          this.state.displayCluePage ? 
            <CluePage 
              clue={this.state.selectedClue}
              hideCluePage={this.hideCluePage.bind(this)}
            /> :
            <GameBoard
              clues={this.state.clues}
              renderCluePage={this.renderCluePage.bind(this)}
              />
        }
      </div>
    )
  }
}

export default Jeopardy;