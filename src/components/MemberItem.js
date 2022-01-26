import React from "react";
import membersStore from "../stores/membersStore";

const MemberItem = ({ member }) => {
  return (
    <div>
      <p>
        <strong>Member Name: </strong>
        {member.firstName + " " + member.lastName}
      </p>
      <p>
        <strong>Number of Books Borrowed: </strong>
        {member.currentlyBorrowedBooks.length}
      </p>
      <p>
        <strong>Membership: </strong>
        {member.membership}
      </p>
      <hr />
    </div>
  );
};

export default MemberItem;
