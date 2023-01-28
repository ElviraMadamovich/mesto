export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        nameSelector = '.profile__title';
        jobSelector = '.profile__subtitle';
        this.userName = document.querySelector(nameSelector);
        this.userJob = document.querySelector(jobSelector);
    }

    getUserInfo() {
        return {
            name: this.userName.textContent,
            job: this.userJob.textContent,
        }
    }

    setUserInfo(data) {
        this.userName.textContent = data.name;
        this.userJob.textContent = data.job;
    }
}