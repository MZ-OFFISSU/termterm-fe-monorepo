import React, { ChangeEvent } from "react";
import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, handleValue };
};

export default useInput;
