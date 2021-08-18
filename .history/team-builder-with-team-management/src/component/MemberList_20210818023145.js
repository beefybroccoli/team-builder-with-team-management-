import React, { useState } from "react";
import { temp_members } from "../component/constant";

/**
 * a list of members inside a panel for a overview and other calculation
 * @param {*} props
 * @returns
 */
export default function MemberList(props) {

  const cb_print_list=()=>{
    props.input_member_list &&
    props.input_member_list.map((object, index) => {
      return (
        <div>
          <p>
            id, {object.input_text_firstName}{" "}
            {object.input_text_lastName}, {object.input_select_title},{" "}
            {object.input_text_email}
          </p>
        </div>
      );
    }
  

  return (
    <div>
      <h1>MemberList Page</h1>
      <div>
        {
          
          cb_print_list()
        }
      </div>

      {/* <MemberCard
       
        input_temp_member={temp_members[0]}
      /> */}
    </div>
  );
} //end MemberList function

/*

 <p>length of array is {props.input_member_list.length}</p>

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

                <>
                <p>
                  id, {object.input_text_firstName} ,{" "}
                  {object.input_text_lastName},{object.input_text_email},{" "}
                  {object.input_select_title}
                </p>
              </>,
*/
