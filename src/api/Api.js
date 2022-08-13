class Api {
  constructor(options) {
    
    this._baseUrl = options.baseUrl;

    this._getJSON = function (res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getHotels(place, checkIn, checkOut) {
    return fetch(`${this._baseUrl}?limit=20&currency=rub&location=${place}&checkIn=${checkIn}&checkOut=${checkOut}`, {
      method: 'GET',
    })
    .then(res => this._getJSON(res))
  }
}

export const api = new Api({
  baseUrl: 'http://engine.hotellook.com/api/v2/cache.json',
});