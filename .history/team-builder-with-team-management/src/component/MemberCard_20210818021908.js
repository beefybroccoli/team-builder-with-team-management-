import React from "react";
import 

/**
 * allow you to edit team member information in a collapsable panel
 * @param {*} props
 * @returns
 */
export default function MemberCard(props) {
  return (
    <div>
      <h1>MemberCard Page</h1>
      <Form func_add_member={set_newMember} button_name="Update" input_member />
    </div>
  );
}
