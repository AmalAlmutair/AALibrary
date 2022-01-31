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

  handleBorrowBook = (memberId, selectedBook) => {
    const foundMember = this.members.find((member) => +member.id === +memberId);
    const alreadyBorrowed = foundMember.currentlyBorrowedBooks.find(
      (bookId) => +bookId === +selectedBook.id
    );
    if (alreadyBorrowed) {
      window.alert(`You already have this Book La tsta3bi6`);
    } else {
      if (
        foundMember &&
        ((foundMember.membership === "gold" &&
          foundMember.currentlyBorrowedBooks.length < 5) ||
          (foundMember.membership === "silver" &&
            foundMember.currentlyBorrowedBooks.length < 3) ||
          (foundMember.membership === "bronze" &&
            foundMember.currentlyBorrowedBooks.length < 2))
      ) {
        foundMember.currentlyBorrowedBooks.push(selectedBook.id);
        selectedBook.borrowedBy.push(memberId);
      } else {
        console.log("7asafa", memberId, selectedBook.id);
      }
    }
  };

  handleReturnBook = (memberId, selectedBook) => {
    const foundMember = this.members.find((member) => +member.id === +memberId);
    foundMember.currentlyBorrowedBooks = foundMember.currentlyBorrowedBooks.filter(
      (bookId) => +bookId !== +selectedBook.id
    );

    selectedBook.borrowedBy = selectedBook.borrowedBy.filter(
      (_memberId) => +_memberId !== +memberId
    );
  };
}

const membersStore = new MembersStore();
export default membersStore;
