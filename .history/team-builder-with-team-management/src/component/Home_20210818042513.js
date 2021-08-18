import React, { useState, useEffect } from "react";
import Form from "../component/Form";
import MemberList from "../component/MemberList";
import MemberCard from "../component/MemberCard";
import { temp_members } from "../component/constant";

export default function Home(props) {
  // const [member_list, set_MemberList] = useState(temp_members);
  const [member_list, set_MemberList] = useState([]);
  const [member, set_Member] = useState(null);

  useEffect(() => {
    if (member !== null) {
      //find the member.id match any current member in member_list
      let result_array = member_list.filter((element, index) => {
        if (member.id === element.id) {
          return index;
        }
      });

      for (object in Array.from(member_list)){
        if(member.id === object.id)
      }

      //member id currently exist in member_list, modify
      if (result_array.length === 1) {
        console.log("Home.js, case modify member");
        cb_modify_existing_member(result_array[0]);
      }
      //member id do not exist in member_list, so add new member
      if (result_array.length === 0) {
        console.log("Home.js, case add new member");
        //case add new member
        cb_add_new_member();
      }

      if (result_array.length > 1) {
        console.log("there are duplicate ID number");
      }
    }
  }, [member]);

  const cb_add_new_member = () => {
    //create a temporary array
    const temp_array = [...member_list];

    //if the member already exist, do not add

    //else, add the member to the array
    console.log("newMember = ", member);
    temp_array.push({ ...member });

    set_MemberList(temp_array);

    console.log("Home.js useEffect, member_list = ", member_list);
  };

  const cb_modify_existing_member = (index) => {
    //create a temporary array
    const temp_array = [...member_list];

    //store the object in the temp_array by index with matching ID
    if (index) {
      console.log("index = ", index);
      console.log(`before temp_array[${index}] = `, temp_array[index]);
      temp_array[index] = member;
      console.log(`after temp_array[${index}] = `, temp_array[index]);
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
