import { useEffect, useState } from "react";
import './Users.css'

export default function Users() {
  const [users, updateUsers] = useState({});

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((jsonData) => updateUsers(jsonData.results[0]))
      .catch((err) => console.log(err));
  };
  const [newUser, setNewUser] = useState(false);

  function handleGetNewRandomUser(e) {
    setNewUser(!newUser);
  }

  useEffect(() => {
    fetchData();
  }, [newUser]);

  return Object.keys(users).length > 0 ? (
    <div className="user-container">
      <div className="user">
        <h4>Name: {users.name.first}</h4>
        <h4>Gender: {users.gender}</h4>
        <img className="user-img" src={users.picture.large} alt="" />
      </div>
      <div className="get-user">
        <button className="get-user-btn btn" onClick={handleGetNewRandomUser}>Get New User</button>
      </div>
    </div>
  ) : (
    <div className="new-user">
      <h1>Getting Users Data...</h1>
    </div>
  );
}
