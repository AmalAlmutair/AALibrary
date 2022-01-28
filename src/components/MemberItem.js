import React from "react";
import { Link } from "react-router-dom";
import ShowMemberProfile from "../modals/ShowMemberProfile";

// import membersStore from "../stores/membersStore";

const MemberItem = ({ member }) => {
  // const renderBadge = (member) => {
  //   const badge = "";
  //   if ((member.membership = "platinum")) {
  //     return (badge =
  //       "/Users/aisha/Development/Projects/AALibrary/src/images/Platinum.png");
  //     console.log(badge);
  //   } else if ((member.membership = "gold")) {
  //     return (badge =
  //       "/Users/aisha/Development/Projects/AALibrary/src/images/Gold.png");
  //     console.log(badge);
  //   } else {
  //     return (badge =
  //       "/Users/aisha/Development/Projects/AALibrary/src/images/Bronze.png");
  //   }
  // };

  // const showProfile = (memberId) => {
  //   const memberProfile = membersStore.find(
  //     (member) => member.id === memberId ?? member
  //   );
  //   console.log(member);
  // };

  return (
    <div className="member-item">
      <p>
        <strong>Member Name: </strong>
        {member.firstName + " " + member.lastName}
      </p>
      <p>
        <strong>Number of Books Borrowed: </strong>
        <a href="https://static01.nyt.com/images/2022/01/16/fashion/VIRAL-LIBRARY/VIRAL-LIBRARY-jumbo.jpg?quality=75&auto=webp">
          {member.currentlyBorrowedBooks.length}
        </a>
      </p>
      <p>
        <strong>Membership: </strong>
        {member.membership}
      </p>
      <ShowMemberProfile selectedMember={member} />
    </div>
  );
};

export default MemberItem;
