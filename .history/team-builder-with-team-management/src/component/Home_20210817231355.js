import React, { useState, useEffect } from "react";
import Form from "../component/Form";

export default function Home(props) {
  const [member_list, setMember] = useState([]);

  const cb_add_member= (object) => {
    const temp_array = member_list;

    //if the member already exist, do not add


    //else, add the member to the array


    //setMember

  }

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
