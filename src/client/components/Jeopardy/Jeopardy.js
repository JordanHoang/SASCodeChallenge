import React from 'react';
import GameBoard from '../GameBoard/GameBoard';
import { clues } from '../../../../mock-data.js';

class Jeopardy extends React.Component {
  constructor() {
    super();

    this.state = {
      clues: clues, // Collection, where each element in the array is a category Object that contains category data and a questions
    }
  }

  render() {
    return (
      <div>
        <h1>Mini Jeopardy</h1>
        <GameBoard
          clues={this.state.clues}
        />
      </div>
    )
  }
}

export default Jeopardy;