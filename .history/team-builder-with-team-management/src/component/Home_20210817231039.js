import React, {useState} from "react";
import Form from "../component/Form";

export default function Home(props) {
  const [member_list, setMember] = useState([]);
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
