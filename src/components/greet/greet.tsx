import React from "react";

type GreetProps = {
  name?: string;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <div>Hello</div>Hello2 {props.name}
    </div>
  );
};

export default Greet;
