import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const gitHuburl = "https://api.github.com/users/kishor6941";

function App() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getGiHubUserWithAxios();
  }, []);

  const getGiHubUserWithAxios = async () => {
    const response = await axios.get(gitHuburl);
    setUserData(response.data);
  };
  return (
    <div className="App">
      <div className="App-header">
        <h2>GitHub User Data</h2>
      </div>
      <div className="user-container">
        <h5 className="info-item">{userData.followers}</h5>
        <h5 className="info-item">{userData.html_url}</h5>
        <h5 className="info-item">{userData.blog}</h5>
        <h5 className="info-item">{userData.public_repos}</h5>
      </div>
    </div>
  );
}
export default App;
