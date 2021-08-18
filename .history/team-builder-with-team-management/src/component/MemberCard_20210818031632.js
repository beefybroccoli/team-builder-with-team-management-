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
      <h3>MemberCard</h3>
      <h4>
        {props.input_object.input_text_firstName}{" "}
        {props.input_object.input_text_lastName}
      </h4>
      <Form
        input_object={props.input_object}
        input_func_set_Member={props.input_func_set_Member}
        button_name="Modify"
      />
    </div>
  );
}
