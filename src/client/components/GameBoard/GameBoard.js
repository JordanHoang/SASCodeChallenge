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
          <Column
            {...this.props}
            key={index}
            categoryName={category.categoryName}
            categoryId={category.categoryId}
            categoryQuestions={category.categoryQuestions}
          />
        ))}
      </div>
    )
  }
}

export default GameBoard;