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

  handleBorrowBook = (memberId, selectedBookId) => {
    const foundMember = this.members.find((member) => +member.id === +memberId);
    const alreadyBorrowed = foundMember.currentlyBorrowedBooks.find(
      (bookId) => +selectedBookId === +bookId
    );
    if (alreadyBorrowed) {
      window.alert(`You already have this Book La tsta3bi6`);
    } else {
      if (
        foundMember &&
        ((foundMember.membership === "platinum" &&
          foundMember.currentlyBorrowedBooks.length < 5) ||
          (foundMember.membership === "gold" &&
            foundMember.currentlyBorrowedBooks.length < 3) ||
          (foundMember.membership === "silver" &&
            foundMember.currentlyBorrowedBooks.length < 2))
      ) {
        foundMember.currentlyBorrowedBooks.push(selectedBookId);
        console.log(this.members);
      } else {
        console.log("7asafa", memberId, selectedBookId);
      }
    }
  };
  handleReturnBook = (memberId, selectedBookId) => {
    const foundMember = this.members.find((member) => +member.id === +memberId);
    if (foundMember) {
      const index = foundMember.currentlyBorrowedBooks.indexOf(selectedBookId);
      foundMember.currentlyBorrowedBooks.find((bookId) =>
        +selectedBookId === +bookId
          ? foundMember.currentlyBorrowedBooks.splice(index, 1)
          : bookId
      );
    }
  };
}
const membersStore = new MembersStore();
export default membersStore;
