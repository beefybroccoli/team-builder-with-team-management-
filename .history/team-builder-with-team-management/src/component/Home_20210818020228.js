import React, { useState, useEffect } from "react";
import Form from "../component/Form";
import MemberList from "../component/MemberList";
import { temp_members } from "../component/constant";

export default function Home(props) {
  // const [member_list, set_MemberList] = useState(temp_members);
  const [member_list, set_MemberList] = useState([]);
  const [newMember, set_newMember] = useState(null);
  const [existingMember, set_exist]

  useEffect(() => {
    if (newMember !== null) {
      //case add new member
      cb_add_new_member();

      //case modify existing member
      cb_modify_existing_member();
    }
  }, [newMember]);

  const cb_add_new_member = () => {
    //create a temporary array
    const temp_array = [...member_list];

    //if the member already exist, do not add

    //else, add the member to the array
    console.log("newMember = ", newMember);
    temp_array.push({ ...newMember });

    set_MemberList(temp_array);

    console.log("Home.js useEffect, member_list = ", member_list);
  };

  const cb_modify_existing_member = () => {
    //create a temporary array
    const temp_array = [...member_list];

    //make changes to an object

    //store the object in the temp_array by index with matching ID

    //store temp_arry in member_list
    set_MemberList(temp_array);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Form func_add_member={set_newMember} />
      <p>length of member_list is {Array.from(member_list).length}</p>
      <p>Render the member lists</p>
      <MemberList input_member_list={member_list} />
      <MemberCard func_modify_member={set_newMember} />
    </div>
  );
}
