import React from "react";
import { Button } from "flowbite-react";
function ButtonComponent(props) {
  return (
    <>
      <Button>
        <div> {props.name}</div>
        <div className="items-center ml-2">{props.icon}</div>
      </Button>
    </>
  );
}

export default ButtonComponent;
