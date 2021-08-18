import React, { useState, useEffect } from "react";
import Form from "../component/Form";
import MemberList from "../component/MemberList";

export default function Home(props) {
  const [member_list, set_MemberList] = useState([]);
  const member_array = [];

  //add a new member to member_list
  const cb_add_member = (object) => {
    const temp_array = member_list;

    //if the member already exist, do not add

    //else, add the member to the array
    temp_array.push(object);
    //setMember

    set_MemberList(temp_array);

    console.log("cb_add_member, member_list.length = ", member_list.length);
  };

  useEffect(() => {
    console.log("Home.js, member_list.length = ", member_list.length);
  }, [member_list]);

  console.log("Home.js render");

  const temp_object = [
    {
      input_text_firstName: "aa",
      input_text_lastName: "aaa",
      input_select_title: "Manager",
      input_text_email: "aa",
    },
    {
      input_text_firstName: "bb",
      input_text_lastName: "bbb",
      input_select_title: "Manager",
      input_text_email: "bbb",
    },
    {
      input_text_firstName: "cc",
      input_text_lastName: "ccc",
      input_select_title: "Manager",
      input_text_email: "ccc",
    },
  ];
  return (
    <div>
      <h1>Home Page</h1>

      <Form func_add_member={cb_add_member} />
      <p>length of member_list is {member_list.length}</p>
      <p>Render the member cards</p>
      <MemberList input_member_array={temp_object} />
    </div>
  );
}
