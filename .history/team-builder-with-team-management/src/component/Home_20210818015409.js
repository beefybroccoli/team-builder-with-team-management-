import React, { useState, useEffect } from "react";
import Form from "../component/Form";
import MemberList from "../component/MemberList";
import { temp_members } from "../component/constant";

export default function Home(props) {
  // const [member_list, set_MemberList] = useState(temp_members);
  const [member_list, set_MemberList] = useState([]);
  const [member, set_newMember] = useState(null);

  useEffect(() => {
    if (member !== null) {
      //create a temporary array
      const temp_array = [...member_list];

      //if the member already exist, do not add

      //else, add the member to the array
      console.log("newMember = ", member);
      temp_array.push({ ...member });

      set_MemberList(temp_array);

      console.log("Home.js useEffect, member_list = ", member_list);
    }
  }, [member]);

  return (
    <div>
      <h1>Home Page</h1>
      <Form func_add_member={set_newMember} />
      <p>length of member_list is {Array.from(member_list).length}</p>
      <p>Render the member lists</p>
      <MemberList input_member_list={member_list} />
      <MemberCard
    </div>
  );
}
