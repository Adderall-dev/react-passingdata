import React from "react";

const InputComponent = (props) => {
  return (
    <>
      <input
        type="text"
        name="nameInput"
        placeholder="enter your name"
        onChange={(event) => props.onChange(event.target.value)}
      />
      <input type="submit" value="Submit" />
    </>
  );
};

export default InputComponent;
