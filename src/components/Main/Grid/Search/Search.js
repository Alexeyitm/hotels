import React from 'react';
import './Search.scss';

function Search({ initialState }) {
  return (
    <form 
      className="search"
      name="search"
      id="search"
    >

      <label
        className="search__label"
        htmlFor="location"
      >Локация
      </label>
      <input
        className="search__input"
        type="text" id="location"
        name="location"
        defaultValue={initialState.location}
      >
      </input>

      <label
        className="search__label"
        htmlFor="date"
      >Дата заселения
      </label>
      <input
        className="search__input"
        type="date"
        id="date"
        name="date"
        defaultValue={initialState.date}
      >
      </input>

      <label
        className="search__label"
        htmlFor="days"
      >Количество дней
      </label>
      <input
        className="search__input"
        type="number"
        id="days"
        name="days"
        defaultValue={initialState.days}
      >
      </input>

      <button
        className="search__button"
        type="submit"
        form="search"
      >Найти
      </button>

    </form>
  );
}

export default Search;