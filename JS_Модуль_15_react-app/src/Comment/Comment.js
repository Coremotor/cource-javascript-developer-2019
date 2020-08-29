import React from 'react';
import classes from './Comment.module.scss';

const Comment = (props) => {
  return props.comments.map((comment, index) => {

  return (
    <div key={index} className={classes.comment}>
      <div className={classes['comment__name']}>{comment.name}</div>
      <div className={classes['comment__time']}>{comment.date}</div>
      <div className={classes['comment__text']}>{comment.comment}</div>
      <button onClick={() => props.delComment(comment.id)} className={classes['comment__btn']} type="button">Удалить</button>
    </div>
    )}
  )
}

export default Comment;