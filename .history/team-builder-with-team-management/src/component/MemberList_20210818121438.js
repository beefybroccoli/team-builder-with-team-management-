import React, { useState } from "react";
import MemberCard from "./MemberCard";

/**
 * a list of members inside a panel for a overview and other calculation
 * @param {*} props
 * @returns
 */
export default function MemberList(props) {
  const cb_print_list = () => {};

  return (
    <div>
      <h1>MemberList Page</h1>
      <div>
        {props.input_member_list &&
          props.input_member_list.map((object, index) => {
            return (
              <div>
                <p>
                  {object.id}, {object.input_text_firstName}{" "}
                  {object.input_text_lastName}, {" }{object.input_select_title},
                  {object.input_text_email}
                </p>
              </div>
            );
          })}
      </div>

      <div
        style={{
          display: "flex",
          "flex-direction": "row",
          "flex-wrap": "wrap",
        }}
      >
        {props.input_member_list &&
          props.input_member_list.map((member, index) => {
            return (
              <div style={{ border: "black 10px blue", margin: "10px" }}>
                <MemberCard
                  input_object={member}
                  input_func_set_Member={props.input_func_set_Member}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
} //end MemberList function
