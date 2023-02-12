export default class UserInfo {
    constructor({ name, work, photo }) {
        this.name = document.querySelector(name);
        this.work = document.querySelector(work);
        this.photo = document.querySelector(photo);
    }

    getUserInfo() {
        return {
            name: this.name.textContent,
            work: this.work.textContent,
        }
    }

    setUserInfo(data) {
        this.name.textContent = data.name;
        this.work.textContent = data.work;
        this.photo.src = data.photo;
        this._userId = userId;
    }

    changeUserInfo(data) {
        this.name.textContent = data.name;
        this.work.textContent = data.work;
    }

    setNewPhoto({ newPhoto }) {
        this.photo.src = newPhoto;
    }

    getUserId() {
        return this._userId;
    }
}