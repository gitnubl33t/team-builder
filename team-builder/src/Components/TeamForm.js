import React, { useState } from "react";

const TeamForm = (props) => {
  console.log("TeamForm props: ", props);
  const [teamMember, setMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  const changeHandler = (e) => {
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
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        value={teamMember.name}
        onChange={changeHandler}
        placeholder="enter name"
      />
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        name="email"
        value={teamMember.email}
        onChange={changeHandler}
        placeholder="enter email"
      />

      <label htmlFor="role">Role: </label>
      <input
        type="text"
        name="role"
        value={teamMember.role}
        onChange={changeHandler}
        placeholder="enter role"
      />

      <button type="submit">Add New Member</button>
    </form>
  );
};

export default TeamForm;
