import React, { useState, useEffect } from "react";

const Skills = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const skills = props.skills;

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}> Login</button>
      )}
    </>
  );
};

export default Skills;
