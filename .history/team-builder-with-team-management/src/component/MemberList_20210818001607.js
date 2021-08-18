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
      <p>length of array is {props.input_member_array.length}</p>
      <>
        {
          // props.input_member_array &&
          props.input_member_array.map((element) => {
            return(
            <p>
              `id, ${element.firstName} , ${element.lastName}, ${element.email},
              ${element.role}`
            </p>;
          })
          //end expression
        }
      </>
    </div>
  );
} //end MemberList function
