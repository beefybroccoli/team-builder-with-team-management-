import React, { useState, useContext } from "react";

function Form(props) {
  //connect to AppContext
  const { state, dispatch } = useContext(AppContext);
  //   console.log("in Form.js state = ", state);

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

    console.log(formData);
);
    // console.log("end dispatch");

    // console.log("in form.js, state = ", state);
    // console.log("in form.js, state.Member = ", state.Member);
    // console.log(
    //   "in form.js, state.Member.Array_of_Members = ",
    //   state.Array_of_Members
    // );

    // setFormData(returnEmptyFormState);

    // debugger;
  }; //end onSubmit function

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    // const pattern_text = "^[a-zA-Z]+$";
    // const regex = new RegExp(pattern_text);
    // if (event.target.name === "input_select_title") {
    // } else if (regex.test(event.target.value)) {
    // } else {
    // } //end else
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
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
} //end render

export default Form;

//clear formData
// for (let key in formData) {
//   console.log(`formData[${key}] = ${formData[key]}`);
//   formData[key] = "";
//   console.log(`formData[${key}] = ${formData[key]}`);
// }
