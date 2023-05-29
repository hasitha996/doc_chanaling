import React, { useState } from "react";
import Select from "react-select";

const SingalSelect = () => {
  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];

  return (
    <div>
      <Select options={options} />
    </div>
  );
};

export default SingalSelect;