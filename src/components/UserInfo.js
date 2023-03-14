export default class UserInfo {
    constructor({ name, work, avatar }) {
        this.name = document.querySelector(name);
        this.work = document.querySelector(work);
        this.avatar = document.querySelector(avatar);
    }

    setUserAvatar(data) {
        this.avatar.src = data.avatar;
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
    }
}