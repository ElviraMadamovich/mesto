export default class UserInfo {
    constructor({ name, work }) {
        this.name = document.querySelector(name);
        this.work = document.querySelector(work);
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