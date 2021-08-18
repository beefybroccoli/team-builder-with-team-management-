import React from "react";
import Form from "../component/Form";

export default function Home(props) {

  const [member_list, setMember]
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
