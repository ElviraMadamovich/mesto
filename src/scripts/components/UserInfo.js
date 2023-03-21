export default class UserInfo {
    constructor({ name, work, avatar }) {
        this.name = document.querySelector(name);
        this.work = document.querySelector(work);
        this.avatar = document.querySelector(avatar);
    }

    getUserInfo() {
        return {
            name: this.name.textContent,
            work: this.work.textContent,
        }
    }

    setUserName(data) {
        this.name.textContent = data.name;
    }
    setUserWork(data) {
        this.work.textContent = data.about;
    }

    setUserAvatar(data) {
        this.avatar.src = data.avatar;
    }
}