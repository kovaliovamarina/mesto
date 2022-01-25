export default class UserInfo {
    constructor({ nameProfile, job, photoUser }) {
        // debugger
        this._name = nameProfile;
        this._job = job;
        this._avatar = photoUser;
        this._id = "";
    }
    getUserInfo() {
        return {
            nameProfile: this._name.textContent,
            job: this._job.textContent,
            id: this._id
        }
    }
    setUserInfo(name, about, id) {
        this._name.textContent = name;
        this._job.textContent = about;
        this._id = id
    }
    setUserAvatar({ avatar }) {
        this._avatar.style.backgroundImage = `url('${avatar}')`;
    }
}