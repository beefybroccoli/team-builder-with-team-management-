import React, { useState, useEffect } from "react";
import Form from "../component/Form";

export default function Home(props) {
  const [member_list, set_MemberList] = useState([]);

  const cb_add_member = (object) => {
    const temp_array = member_list;

    //if the member already exist, do not add

    //else, add the member to the array
    temp_array.push(object);
    //setMember
    set_MemberList(temp_array);

    console.log()
  };

  return (
    <div>
      <h1>Home Page</h1>

      <main>
        <Form />
        {/* <MemberList /> */}
        <p>Render the member cards</p>
      </main>
    </div>
  );
}
