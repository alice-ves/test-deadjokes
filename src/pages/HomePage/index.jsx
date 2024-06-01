import './style.css';
import { Joke } from '../../components/joke';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      console.log(data);
      setJokes(data.data);
    };
    fetchJoke();
  }, []);

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      console.log(data);
      setJokes(data.data);
    };
    fetchJoke();
  }, []);

  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          name={joke.name}
          text={joke.text}
          avatar={joke.avatar}
        />
      ))}
    </div>
  );
};
