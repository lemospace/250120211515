import React from 'react';
import { useState } from 'react';
import moment from "moment";
import 'moment/locale/ru';
import like from './like.png';
import comm from './comm.png';


function Comments() {

    let CommentData = [
        {
            sender: 'Самуил',
            date: '13 октября 2011 г.',
            text: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'
        },
        {
            sender: 'Лилия Семёновна ',
            date: '14 октября 2011 г.',
            text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'
        },
        {
            sender: 'Лилия Семёновна ',
            date: '14 октября 2011 г.',
            text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'
        }
    ];

    const [state, setState] = useState(CommentData);

    let currentTime = moment(new Date()).format('LL');
    moment.locale('ru');

    let textArea = React.createRef();

    let addComment = () => {
        let newComment = {
            sender: 'Аноним ',
            date: currentTime,
            text: textArea.current.value,
        };
        CommentData = [...state, newComment];
        setState(CommentData);
        textArea.current.value = '';
    }
    let ctrlEnter = (e) => {
        if (e.keyCode === 13 && e.ctrlKey) addComment();
    }

    return (
        <div className='comments-container' >
            <div className="header">
                <div>
                    <span className='last-review'>Последние отзывы </span>
                    <span className='all-reviews'> Все&nbsp;отзывы </span>
                </div>
                <div >
                    <span className='likes'> <img src={like} /> 131 </span>
                    <span className='comms'> <img src={comm} /> 14 </span>
                </div>

            </div>
            {state.map((elem, index) =>
                <div className="comments" key={index}>
                    <div className="comm-info">
                        <span className="comm-name">{elem.sender} </span>
                        <span className="comm-date">{elem.date}</span>
                    </div>
                    <div className="comm-content">
                        <p className="text">{elem.text}</p>
                    </div>
                </div>
            )}
            <div className="text-area" >
                <textarea ref={textArea} onKeyDown={ctrlEnter} />
                <button className="add-comment" onClick={addComment} >Написать консультанту</button>
            </div>
        </div>
    );
}

export default Comments;
