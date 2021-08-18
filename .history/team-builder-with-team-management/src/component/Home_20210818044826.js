import React, { useState, useEffect } from "react";
import Form from "../component/Form";
import MemberList from "../component/MemberList";
import MemberCard from "../component/MemberCard";
import { temp_members } from "../component/constant";

export default function Home(props) {
  // const [member_list, set_MemberList] = useState(temp_members);
  const [member_list, set_MemberList] = useState([]);
  const [member, set_Member] = useState(null);

  if ()

  useEffect(() => {
    if (member !== null) {
      //find the member.id match any current member in member_list
      let is_it_in_member_list = false;

      //determine if an object currently exist in array
      //...return True - if exist in member_list
      //...return False - if does not exist in member_list
      for (let object of Array.from(member_list)) {
        if (member.id === object.id) {
          // console.log(`member.id = ${member.id},  object.id =  ${object.id}`);
          is_it_in_member_list = true;
        }
      }

      //member id currently exist in member_list, modify
      if (is_it_in_member_list === true) {
        // console.log("Home.js, case modify member");
        cb_modify_existing_member();
      }
      //member id do not exist in member_list, so add new member
      if (is_it_in_member_list === false) {
        // console.log("Home.js, case add new member");
        //case add new member
        cb_add_new_member();
      }
    }
  }, [member]);

  const cb_add_new_member = () => {
    //create a temporary array
    const temp_array = [...member_list];

    //if the member already exist, do not add

    //else, add the member to the array
    // console.log("newMember = ", member);
    temp_array.push({ ...member });

    set_MemberList(temp_array);

    // console.log("Home.js useEffect, member_list = ", member_list);
  };

  const cb_modify_existing_member = () => {
    //find index of the current object in array
    let index = -1;
    for (let object of Array.from(member_list)) {
      index += 1;
      if (member.id === object.id) {
        continue;
      }
    }

    //create a temporary array
    const temp_array = [...member_list];

    //store the object in the temp_array by index with matching ID
    if (index) {
      // console.log("index = ", index);
      // console.log(`before temp_array[${index}] = `, temp_array[index]);
      temp_array[index] = member;
      // console.log(`after temp_array[${index}] = `, temp_array[index]);
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
