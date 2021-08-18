import React from "react";

/**
 * a list of members inside a panel for a overview and other calculation
 * @param {*} props
 * @returns
 */
export default function MemberList(props) {
  console.log(
    "MemberList.js, props.input_member_array.length = ",
    props.input_member_array.length
  );

  return (
    <div>
      <h1>MemberList Page</h1>
      <>
        {props.input_member_array &&
          props.input_member_array.map((element) => {
           return <p>
              `id, ${element.firstName} , ${element.lastName}, ${element.email},
              ${element.role}`
            </p>;
          })
         
      </>
    </div>
  );

  /**
   * This is a stretch goal 1. Attempt this after meeting MVP.
   */
}
