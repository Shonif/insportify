import { useState } from "react";

import Input from "../utils/Input/Input";
import Select from "../utils/Select/Select";

import styles from "./Filter.module.css";

const Filter = () => {
  const categoryOption = [];
  const sportsOption = [{ value: "Baseball", label: "Baseball" }];
  const venueOption = [
    { value: "Kinsmen_Stadium", label: "Kinsmen Stadium" },
    { value: "Kinsmen_Stadium", label: "Kinsmen Stadium" },
    { value: "Kinsmen_Stadium", label: "Kinsmen Stadium" },
    { value: "Kinsmen_Stadium", label: "Kinsmen Stadium" },
    { value: "Kinsmen_Stadium", label: "Kinsmen Stadium" },
  ];
  return (
    <div className={styles.filter}>
      <Select options={categoryOption} placeholder="Select Category" />
      <Select options={sportsOption} placeholder="Select Sports" />
      <Input type="date" />
      <Select options={venueOption} placeholder="Select Venue" />
    </div>
  );
};

export default Filter;
