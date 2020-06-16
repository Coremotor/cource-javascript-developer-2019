import React, { useState, useEffect } from 'react';
import classes from './App.module.scss';
import Form from "./Form/Form";
import Comment from "./Comment/Comment";

function App() {
//Задаем начальное значение стейта
  const [state, setState] = useState({
    comments:
      [

      ],
    form:
      {
        name:'',
        comment:'',
      }
  });
//Забираем коментарии из локал сторейджа, если есть, если нет то берем начальное значение стейта
  useEffect(() => {
    const raw = localStorage.getItem('state') || state;
    setState(JSON.parse(raw));
  }, [])

//Пишем состояние стейта в локал сторейдж каждый раз по изменеию стейта
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

//Пишем значение инпута и текстарии в стейт по изменению значений соответствующих полей
  const handleChange = (event) => {
    setState({
      comments: [...state.comments],
      form: {
        ...state.form,
        [event.target.name]: event.target.value,
      }
    })
  }

//ф-ия добавления коментария в стейт
  const addComment = (event) => {
    event.preventDefault();
    setState ({
      comments: [
        ...state.comments,
        {
          id: Date.now(),
          name: state.form.name,
          comment: state.form.comment,
          date: new Date().toLocaleString(),
        }],
      form:
      {
        name: '',
        comment: '',
      }
    });
  }
//ф-ия удаления коментария из стейта
  const delComment = (id) => {
    setState ({
      comments: state.comments.filter(comment => comment.id !== id),
      form:
        {
          name: '',
          comment: '',
        }
    })
  }
//рендерим список коментариев
  return (
    <div className={classes.app}>
      <Comment comments={state.comments} delComment={delComment}/>
      <Form name={state.form.name} comment={state.form.comment} handleChange={handleChange} addComment={addComment}/>
    </div>
  );
}

export default App;
