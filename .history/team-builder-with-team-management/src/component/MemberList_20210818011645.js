import React, { useState } from "react";

/**
 * a list of members inside a panel for a overview and other calculation
 * @param {*} props
 * @returns
 */
export default function MemberList(props) {
  return (
    <div>
      <h1>MemberList Page</h1>
      <p>length of array is {props.input_member_list.length}</p>

      {
        props.input_member_list &&
          Array.from(props.input_member_list).map((element) => {
            return (
              <>
                <p>
                  id, {input_text_firstName} , {input_text_lastName},
                  {input_text_email}, {input_select_title}
                </p>
              </>
            );
          })
        //end expression
      }
    </div>
  );
} //end MemberList function

/*
{
  input_text_firstName,
  input_text_lastName,
  input_text_email,
  input_select_title,
}


              <>
    <p>
      id, {input_text_firstName} , {input_text_lastName},
      {input_text_email}, {input_select_title}
    </p>
  </>
*/
