export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  getElementsPics() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
      .then(res => this._parseResponse(res));
  }

  putLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => this._parseResponse(res));
  }

  removeLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._parseResponse(res));
  }

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }


  addItem(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => this._parseResponse(res));
  }

  deleteItem(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._parseResponse(res));
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
      .then(res => this._parseResponse(res));
  }

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        work: data.work
      })
    })
      .then(res => this._parseResponse(res));
  }

  changePhoto(data) {
    return fetch(`${this._url}/users/me/photo`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        photo: data.photo
      })
    })
      .then(res => this._parseResponse(res));
  }
}