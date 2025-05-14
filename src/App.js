import "./App.css";
import Counter from "./Components/Counter";
import UserProfile from "./Components/UserProfile";
import ThemeContext from "./context/ThemeContext";

function App() {
  return (
    <Counter initialValue={0} />;
    <UserProfile />
  )
}

export default App;
