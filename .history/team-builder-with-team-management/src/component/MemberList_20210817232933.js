import React from "react";

/**
 * a list of members inside a panel for a overview and other calculation
 * @param {*} props
 * @returns
 */
export default function MemberList(props) {
  console.log("MemberList.js, member_list.length = ", props.input_member_array);

  return (
    <div>
      <h1>MemberList Page</h1>
      <>
        {props.input_member_array &&
          Array.from(props.input_member_array).map((element) => {
            return (
              <p>
                `id, ${element.firstName} , ${element.lastName}, $
                {element.email}, ${element.role}`
              </p>
            );
          })}
      </>
    </div>
  );

  /**
   * This is a stretch goal 1. Attempt this after meeting MVP.
   */
}
