import React from 'react';
import GameBoard from '../GameBoard/GameBoard';
import CluePage from '../CluePage/CluePage';
import { clues } from '../../../../mock-data.js';
import { retrieveClues } from '../../actions/actions.js';
import './Jeopardy.css';

class Jeopardy extends React.Component {
  constructor() {
    super();

    this.state = {
      clues: clues, // Collection, where each element in the array is a category Object that contains category data and a questions
      displayCluePage: false // determines whether to show the game board, or to show the selected clue
    }
  }

  componentDidMount() {
    this.getClues();
  }

  async getClues() {
    const queryParams = {
      categoryId: 25, // science categoryId,
      min_date: '1996-01-01T12:00:00.000Z',
      max_date: '1996-12-31T12:00:00.000Z'
    }

    const clues = await retrieveClues(queryParams);

    const formattedClues = this.formatClues(clues);
  }

  formatClues(clues) { // take all clues and choose 5 questions, one from each value category. And format for rest of components to use
    return;
  }

  renderCluePage(selectedClue) {
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
      <div class="jeopardy-app-container">
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