import "./App.css";
import React, { useState } from "react";
import Counter from "./Components/Counter";
import UserProfile from "./Components/UserProfile";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: ""
  });


  return (
    <>
      <Counter initialValue={0} />
      <UserProfile user={user} updateUser={setUser} />
    </>


  )
}

export default App;
