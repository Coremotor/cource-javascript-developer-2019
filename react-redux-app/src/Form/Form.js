import React from 'react';
import { useDispatch } from "react-redux";
import {useSelector, shallowEqual} from "react-redux";
import classes from './Form.module.scss';


function Form() {

const form = useSelector(state => state.form, shallowEqual)
const dispatch = useDispatch();

  return (
    <form onSubmit={
      (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_COMMENT'})
      }
    } className={classes.form}>

      <label htmlFor={['input-name']}>Имя:</label>
      <input
        onChange={(event) => dispatch (
            {
              type: 'HANDLE_FORM',
              textValue: event.target.value,
              textFieldName: event.target.name,
            }
          )
        }
        value={form.name}
        className={classes['form__input-name']}
        id={['input-name']}
        type="text"
        name="name"
        required={true} />

      <label htmlFor={['comment-text']}>Текст коментария:</label>
      <textarea
        onChange={(event) => dispatch (
            {
              type: 'HANDLE_FORM',
              textValue: event.target.value,
              textFieldName: event.target.name,
            }
          )
        }
        value={form.comment}
        className={classes['form__text-field']}
        id={['comment-text']}
        name="comment"
        required={true} />

      <button className={classes['form__btn']} type="submit">Добавить коментарий</button>
    </form>
  );
}

export default Form;


