import React, {useEffect, useState} from 'react'
import peopleData from './peopleData.json';
const { Octokit } = require("@octokit/rest");
const Test = () => {
const [user, setUser] = useState([]);

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
  
  useEffect(() => {
    getGithubUsers();
  }, []);

  async function getGithubUsers() {
    const result = await octokit.request(`GET /users/${peopleData.speaker.github}`);
    console.log(result.data);
   setUser(result.data)
  }

  console.log('user', user)
 return (
    <div className="user-container">               
               {peopleData.map(item =>
               <div key="">
                <p>{item.speaker.name}</p>
               <p>{item.speaker.github}</p> 
               <img src={user.avatar_url} />
                </div>
                )} 
                {/* <p>{user.login}</p>
                <img src={user.avatar_url} /> */}
    </div>
    );
 };
 
 export default Test;