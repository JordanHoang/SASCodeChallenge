import React from 'react';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTitleCard() {
    return (
      <div className="title-card">
        {this.props.titleName.toUpperCase()}
      </div>
    )
  }

  renderValueCard() {
    return (
      <div className="value-card" onClick={() => {this.props.renderCluePage(this.props.question)} }>
        ${this.props.question.value}
      </div>
    )
  }

  render() {
    return (
      <div className="card-container">
        { 
          this.props.titleCard ? 
            this.renderTitleCard() :
            this.renderValueCard()
        }
      </div>
    )
  }
}

export default Card