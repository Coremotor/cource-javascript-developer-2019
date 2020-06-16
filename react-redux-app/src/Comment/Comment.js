import React from 'react';
import classes from './Comment.module.scss';
import {useSelector, shallowEqual, useDispatch} from "react-redux";


function Comment () {

  const comments = useSelector(state => state.comments, shallowEqual);
  const dispatch = useDispatch();

  return comments.map((comment, index) => {
    return (
      <div key={index} className={classes.comment}>
        <div className={classes['comment__name']}>{comment.name}.  ID = {comment.id}</div>
        <div className={classes['comment__date']}>{comment.date}</div>
        <div className={classes['comment__text']}>{comment.text}</div>

        <button onClick={() => dispatch (
            {
              type: 'DEL_COMMENT',
              id: comment.id,
            }
          )
        }
        className={classes['comment__btn']}
        type="button">Удалить</button>
      </div>
      )}
    )
  }

export default Comment;