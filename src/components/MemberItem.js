import React from "react";
import ShowMemberProfile from "../modals/ShowMemberProfile";

const MemberItem = ({ member }) => {
  const membershipBadge = () => {
    if (member.membership === "platinum") {
      <img src="../images/Platinum.png" />;
    } else if (member.membership === "gold") {
      <img src="../images/Gold.png" />;
    } else {
      <img src="../images/Silver.png" />;
    }
  };

  return (
    <div className="member-item">
      <div className="details">
        <div className="badge">
          <img
            className="badge-image"
            src={
              member.membership === "gold"
                ? "https://cdn-icons-png.flaticon.com/512/2583/2583344.png"
                : member.membership === "silver"
                ? "https://cdn-icons-png.flaticon.com/512/2583/2583319.png"
                : "https://cdn-icons-png.flaticon.com/512/2583/2583434.png"
            }
          />
        </div>
        <div className="member-name-books">
          <p>
            {member.firstName + " " + member.lastName + " | "}
            <strong>Books Borrowed: </strong>
            {member.currentlyBorrowedBooks.length}
          </p>
        </div>
        <div>
          <p className="add-btns">
            <ShowMemberProfile selectedMember={member} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberItem;
