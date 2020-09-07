import React, { useState } from "react";
import ReactDOM from "react-dom";

const TeamForm = (props) => {
  console.log("TeamForm props: ", props);
  const [teamMember, setMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.value);
    console.log("teamMember: ", teamMember);
    setMember({
      ...teamMember,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.addNewMember(teamMember);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={teamMember.name}
        onChange={changeHandler}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={teamMember.email}
        onChange={changeHandler}
      />

      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        value={teamMember.role}
        onChange={changeHandler}
      />

      <button type="submit">Add New Member</button>
    </form>
  );
};

export default TeamForm;
