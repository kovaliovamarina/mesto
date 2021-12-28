export default class UserInfo {
    constructor({ nameProfile, job }) {
        this._name = nameProfile;
        this._job = job;
    }
    getUserInfo() {
        return {
            nameProfile: this._name.textContent,
            job: this._job.textContent
        }
    }
    setUserInfo() {
        this._name.textContent = nameProfile.value;
        this._job.textContent = job.value;
    }
}