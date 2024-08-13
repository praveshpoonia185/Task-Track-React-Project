import React from 'react';
import Tag from './Tag';
import './TaskCard.css';
import deleteIcon from '../assets/delete.png';

const TaskCard = ({ title, tags }) => {
  return (
    <>
      <article className='task_card'>
        <p className='task_text'>{title}</p>
        <div className='task_card_bottom_line'>
          <div className='task_card_tags'>
            {
              tags.map((tag, index)=> {
                <Tag key={index} tagName={tag} selected={true}></Tag>
              })
}
          </div>
          <div className='task_delete'>
            <img src={deleteIcon} className='delete_icon'></img>
          </div>
        </div>
      </article>
    </>
  )
}

export default TaskCard;
