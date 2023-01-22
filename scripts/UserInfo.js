export default class UserInfo {
    constructor({ nameSelector, jobSelector, imageSelector }) {
        this.userName = document.querySelector(nameSelector);
        this.userJob = document.querySelector(jobSelector);
        this.userImage = document.querySelector(imageSelector);
    }

    getUserInfo() {
        return {
            name: this.userName.textContent,
            about: this.userJob.textContent,
          }
    }

    setUserInfo(data) {
        this.userName.textContent = data.name;
        this.userJob.textContent = data.job;
        this.userImage.src = data.image;
        this.userImage.alt = data.name;
    }
}