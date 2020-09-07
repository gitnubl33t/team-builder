import React from "react";
import "./App.css";
import TeamForm from "./Components/TeamForm";

function App() {
  const [memberList, setMemberList] = useState([
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@winterfell.com",
      role: "Commander of the Night's Watch",
    },
  ]);

  const addNewMember = (formData) => {
    const newMember = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
    };
    setMemberList([...memberList, newMember]);
  };

  return (
    <div className="App">
      <h1>Team Member List</h1>
      <TeamForm addNewMember={addNewMember} />
      <Team teamlist={teamlist} />
    </div>
  );
}

export default App;
