import React, { useState, useEffect } from "react";
import Form from "../component/Form";
import MemberList from "../component/MemberList";
import MemberCard from "../component/MemberCard";
import { temp_members } from "../component/constant";

export default function Home(props) {
  const [member_list, set_MemberList] = useState(temp_members);
  // const [member_list, set_MemberList] = useState([]);
  const [member, set_Member] = useState(null);

  useEffect(() => {
    if (member !== null) {

      let index = temp_array.filter((element, index) => {
        if (member.id === element.id) {
          return index;
        }
      });

      if (index) {

      }else{

      }

      //case add new member
      cb_add_new_member();

      
    }
  }, [member]);

  const cb_add_new_member = () => {
    //create a temporary array
    const temp_array = [...member_list];

    //if the member already exist, do not add

    //else, add the member to the array
    console.log("newMember = ", member);
    temp_array.push({ ...member, id: Date.now() });

    set_MemberList(temp_array);

    console.log("Home.js useEffect, member_list = ", member_list);
  };

  const cb_modify_existing_member = () => {
    //create a temporary array
    const temp_array = [...member_list];

    //store the object in the temp_array by index with matching ID
    if (index) {
      temp_array[index] = member;
    }

    //store temp_arry in member_list
    set_MemberList(temp_array);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Form input_func_set_Member={set_Member} button_name="Add" />
      <p>length of member_list is {Array.from(member_list).length}</p>
      <p>Render the member lists</p>
      <MemberList
        input_member_list={member_list}
        input_func_set_Member={set_Member}
      />
    </div>
  );
}
