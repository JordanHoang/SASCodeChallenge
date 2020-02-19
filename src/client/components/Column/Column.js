import React from 'react';
import Card from '../Card/Card';
import './Column.css'

const questionsArray = ['question100', 'question200', 'question300', 'question400', 'question500']

const Column = (props) => (
    <div className="column">
        <Card
          titleCard
          titleName={props.categoryName}
        />
        {questionsArray.map((value, index) => (
          <Card
            {...props}
            key={index}
            question={props.categoryQuestions[value]}
          />
        ))}
    </div>
);
export default Column