import axios from "axios";
import { UserCard } from "./components/UserCard";
import "./styles.css";
import { User } from "./types/api/user";

const user = {
  id: 1,
  name: "じゃけぇ",
  email: "1234",
  address: "名古屋"
};

export default function App() {
  const FetchUser = () => {
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users");
  };
  return (
    <div className="App">
      <button onClick={FetchUser}></button>
      <UserCard user={user} />
    </div>
  );
}
