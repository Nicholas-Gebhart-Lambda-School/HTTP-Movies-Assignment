import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MovieUpdate = props => {
  const initialState = {
    id: null,
    title: '',
    director: '',
    metascore: null,
    stars: []
  };

  const [form, setForm] = useState(initialState);

  useEffect(() => {
    const findMovie = props.movies.find(
      movie => `${movie.id}` === props.match.params.id
    );

    findMovie && setForm(findMovie);
  }, [props.movies, props.match.params.id]);

  const handleChanges = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form>
      <input type="text" name="title" value="hello" />
    </form>
  );
};

export default MovieUpdate;
