import { LightningElement, wire, track } from 'lwc';
import { getUserInfo } from 'lightning/uiRecordApi';

export default class YourBikeSelection extends LightningElement {
    @track currentUserName;

    @wire(getUserInfo)
    getUserInfo({ error, data }) {
        if (data) {
            this.currentUserName = data.userInfo.firstName + ' ' + data.userInfo.lastName;
        } else if (error) {
            console.error(error);
        }
    }
}
