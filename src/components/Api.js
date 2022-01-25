export default class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
    getInitialCards() {
        return fetch(this._baseUrl + '/cards', {
                method: 'GET',
                headers: this._headers
            })
            .then(isError);
        // .then(res => {
        //     if (res.ok) {
        //         return res.json();
        //     }
        //     return Promise.reject(`Ошибка: ${res.status}`);
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
                method: 'GET',
                headers: this._headers
            })
            .then(isError);
    }

    setProfile(inputName, inputAbout) {
        return fetch(this._baseUrl + '/users/me', {
                method: 'PATCH',
                headers: this._headers,

                body: JSON.stringify({
                    name: inputName,
                    about: inputAbout

                })
            })
            .then(isError);

    }
    setUserAvatar(inputAvatar) {
        return fetch(this._baseUrl + '/users/me/avatar', {
                method: 'PATCH',
                headers: this._headers,

                body: JSON.stringify({
                    avatar: inputAvatar,
                })
            })
            .then(isError);

    }

    addCard(inputName, inputLink) {
        return fetch(this._baseUrl + '/cards', {
                method: 'POST',
                headers: this._headers,

                body: JSON.stringify({
                    name: inputName,
                    link: inputLink
                })
            })
            .then(isError);
    }

    removeCard(cardId) {
        // debugger
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(isError);

    }
    setLikes(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                method: 'PUT',
                headers: this._headers,
            })
            .then(isError);
    }
    removeLikes(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(isError);
    }

}

const isError = res => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};