import React from 'react';
import Column from '../Column/Column';
import './GameBoard.css';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="game-board">
        {this.props.clues.map((category, index) => (
          <div key={index}>
            <Column
              {...this.props}
              categoryName={category.categoryName}
              categoryId={category.categoryId}
              categoryQuestions={category.categoryQuestions}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default GameBoard;