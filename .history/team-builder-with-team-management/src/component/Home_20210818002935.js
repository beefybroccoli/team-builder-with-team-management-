import React, { useState, useEffect } from "react";
import Form from "../component/Form";
import MemberList from "../component/MemberList";

export default function Home(props) {
  const [member_list, set_MemberList] = useState([]);
  const [forceUpdate, set] = useForceUpdate();

  //add a new member to member_list
  const cb_add_member = (object) => {
    const temp_array = member_list;

    //if the member already exist, do not add

    //else, add the member to the array
    temp_array.push(object);
    //setMember

    set_MemberList(temp_array);

    console.log("cb_add_member, member_list.length = ", member_list.length);

    forceUpdate();
  };

  useEffect(() => {
    console.log("Home.js, member_list.length = ", member_list.length);
  }, [member_list]);

  console.log("Home.js render");
  return (
    <div>
      <h1>Home Page</h1>

      <main>
        <Form func_add_member={cb_add_member} />
        <p>length of member_list is {member_list.length}</p>
        <p>Render the member cards</p>
        <MemberList input_member_array={member_list} />
      </main>
    </div>
  );
}
