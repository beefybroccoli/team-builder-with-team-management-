import React from "react";

/**
 * a list of members inside a panel for a overview and other calculation
 * @param {*} props
 * @returns
 */
export default function MemberList(props) {
  return (
    <div>
      <h1>MemberList Page</h1>
      <>
      {
        Array.from(props.input_member_array).map((element)=>{
          <p>`id, ${element.firstName} , ${element.lastName}, ${element.email}, role`</p>
        })
      }
        
      </>
    </div>
  );

  /**
   * This is a stretch goal 1. Attempt this after meeting MVP.
   */
}
