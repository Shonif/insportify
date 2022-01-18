import React from "react";

import Filter from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
import CategoryList from "../../components/CategoryList/CategoryList";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Filter />
      <CategoryList />
    </div>
  );
};

export default Home;
