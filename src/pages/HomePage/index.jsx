import { useState } from 'react';
import './style.css';
import { Joke } from '../../components/joke';

export const HomePage = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const increaseLike = () => {
    setLikes(likes + 1);
  };
  const decreaseLike = () => {
    setDislikes(dislikes + 1);
  };
  return (
    <div className="container">
      <Joke></Joke>
    </div>
  );
};
