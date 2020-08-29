import React from 'react';
import classes from './Form.module.scss';


function Form(props) {

  return (
    <form onSubmit={props.addComment} className={classes.form} >
      <label htmlFor={['input-name']}>Имя:</label>
      <input
        onChange={props.handleChange}
        value={props.name}
        className={classes['form__input-name']}
        id={['input-name']}
        type="text"
        name="name"
        required={true} />

      <label htmlFor={['comment-text']}>Текст коментария:</label>
      <textarea
        onChange={props.handleChange}
        value={props.comment}
        className={classes['form__text-field']}
        id={['comment-text']}
        name="comment"
        required={true} />

      <button className={classes['form__btn']} type="submit">Добавить коментарий</button>
    </form>
  );
}

export default Form;


