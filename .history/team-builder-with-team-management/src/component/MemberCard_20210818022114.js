import React from "react";
import Form from "../component/Form";

/**
 * allow you to edit team member information in a collapsable panel
 * @param {*} props
 * @returns
 */
export default function MemberCard(props) {
  return (
    <div>
      <h1>MemberCard Page</h1>
      <Form
        input_func_set_existingMember={props.input_func_set_existingMember}
        button_name="Update"
        input_member
      />
    </div>
  );
}
