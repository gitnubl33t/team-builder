import React, { useState } from "react";
import "./App.css";
import TeamForm from "./Components/TeamForm";
import Team from "./Components/Team";

function App() {
  const [memberList, setMemberList] = useState([
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@beyondthewall.com",
      role: "The King Beyond the Wall",
    },
  ]);

  const addNewMember = (formData) => {
    const newMember = {
      id: Date.now(), //using Date.now() generates a unique key each millisecond
      name: formData.name,
      email: formData.email,
      role: formData.role,
    };
    setMemberList([...memberList, newMember]);
  };

  return (
    <div className="App">
      <h1>Westeros Census</h1>
      <TeamForm addNewMember={addNewMember} />
      <Team memberList={memberList} />
    </div>
  );
}

export default App;
