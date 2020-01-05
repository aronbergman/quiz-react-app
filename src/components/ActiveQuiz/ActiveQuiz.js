import React from 'react';
import classes from './ActiveQuiz.module.scss'
import {AnswersList} from './AnswersList/AnswersList'

export const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
            <strong>1. </strong>
                How are you?
            </span>
            <small>4 из 14</small>
        </p>

        <AnswersList
            answers={props.answers}
        />
    </div>
)