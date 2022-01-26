import { makeAutoObservable } from "mobx";
import membersData from "../membersData";

class MembersStore {
  members = membersData;
  constructor() {
    makeAutoObservable(this);
  }
}
const membersStore = new MembersStore();
export default membersStore;
