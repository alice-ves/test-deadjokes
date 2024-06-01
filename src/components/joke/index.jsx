import { useEffect, useState } from 'react';
import './style.css';

export const Joke = ({ name, text, avatar }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const increaseLike = () => {
    setLikes(likes + 1);
  };
  const decreaseLike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={avatar} />
          <p className="user-name">{name}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={increaseLike}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={decreaseLike}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {dislikes}
        </span>
      </div>
    </div>
  );
};
