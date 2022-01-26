import React from "react";
import membersStore from "../stores/membersStore";
import MemberItem from "./MemberItem";

const MembersList = () => {
  const membersList = membersStore.members.map((member) => (
    <MemberItem member={member} />
  ));

  //   <div> {member.firstName}</div>
  return (
    <div>
      <h1> Members List: </h1>
      {membersList}
    </div>
  );
};

export default MembersList;
