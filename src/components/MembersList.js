import React from "react";
import membersStore from "../stores/membersStore";
import MemberItem from "./MemberItem";
import AddMememberModal from "../modals/AddMememberModal";
import { observer } from "mobx-react";

const MembersList = () => {
  const membersList = membersStore.members.map((member) => (
    <MemberItem member={member} />
  ));

  return (
    <>
      <div className="members-list">
        <div className="members-list-header">
          <div>
            <AddMememberModal />
          </div>
          <div>
            <h3 className="list-title"> Members: </h3>
          </div>
        </div>
        <div className="list">{membersList}</div>
      </div>
    </>
  );
};

export default observer(MembersList);
