import { makeAutoObservable } from "mobx";
import membersData from "../membersData";

class MembersStore {
  members = membersData;
  constructor() {
    makeAutoObservable(this);
  }

  handleAddMember = (member) => {
    member.id = this.members[this.members.length - 1].id + 1;
    member.slug =
      member.firstName.toLowerCase() + "_" + member.lastName.toLowerCase();
    member.currentlyBorrowedBooks = [];
    this.members.push(member);
    console.log(member);
  };

  handleOpenProfile = (memberId) => {
    this.members = this.members.find((member) => member.id === memberId);
    console.log(this.members);
  };
}
const membersStore = new MembersStore();
export default membersStore;
