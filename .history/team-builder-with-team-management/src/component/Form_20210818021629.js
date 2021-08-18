import React, { useState, useContext } from "react";

export default function Form(props) {
  //initial state
  const initial_state = () => {
    return {
      input_text_firstName: "",
      input_text_lastName: "",
      input_select_title: "",
      input_text_email: "",
    };
  };

  const [formData, setFormData] = useState(initial_state);

  const onSubmit = (event) => {
    event.preventDefault();

    //add member to member_list
    props.func_add_member(formData);

    //reset formData
    setFormData(initial_state);

    console.log("formData = ", formData);
  }; //end onSubmit function

  const onChange = (event) => {
    //send data to formData
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }; //end onChange function

  return (
    <div>
      <header>Generic Form</header>
      <form onclick={onSubmit}>
        <label>
          FirstName:
          <input
            type="text"
            onChange={onChange}
            id="input_text_firstName"
            name="input_text_firstName"
            value={formData.input_text_firstName}
          />
        </label>
        <label>
          LastName:
          <input
            type="text"
            onChange={onChange}
            id="input_text_lastName"
            name="input_text_lastName"
            value={formData.input_text_lastName}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            onChange={onChange}
            id="input_text_email"
            name="input_text_email"
            value={formData.input_text_email}
          />
        </label>
        <label>
          Role:
          <select
            onChange={onChange}
            id="input_select_title"
            name="input_select_title"
            value={formData.input_select_title}
          >
            <option value=""></option>
            <option value="Manager">Manager</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Sales">Sales</option>
            <option value="Public Relation">Public Relation</option>
            <option value="IT Support">IT Support</option>
          </select>
        </label>
        <button onClick={onSubmit}>{}}</button>
      </form>
    </div>
  );
} //end render
