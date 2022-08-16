import React from 'react';
import './Search.scss';

function Search({
  formSearchState,
  setFormSearchState,
  getHotels
}) {
  
  const handleClickLocation = (e) => {
    setFormSearchState({location: e.target.value, checkIn: formSearchState.checkIn, days: formSearchState.days});
  }

  const handleClickDate = (e) => {
    setFormSearchState({location: formSearchState.location, checkIn: e.target.value, days: formSearchState.days});
  }

  const handleClickDays = (e) => {
    setFormSearchState({location: formSearchState.location, checkIn: formSearchState.checkIn, days: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getHotels(formSearchState.location, formSearchState.checkIn, formSearchState.days);
  }

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
        onChange={handleClickLocation}
        defaultValue={formSearchState.location}
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
        onChange={handleClickDate}
        defaultValue={formSearchState.checkIn}
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
        onChange={handleClickDays}
        defaultValue={formSearchState.days}
      >
      </input>

      <button
        className="search__button"
        type="submit"
        form="search"
        onClick={handleSubmit}
        disabled={formSearchState.location && formSearchState.checkIn && formSearchState.days ? false : true}
      >Найти
      </button>

    </form>
  );
}

export default Search;