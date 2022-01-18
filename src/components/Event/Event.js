import React from "react";

import Button from "../utils/Button/Button";

import commentIcon from "../../assets/comment.png";
import styles from "./Event.module.css";

const Event = ({ image, title, content, date }) => {
  return (
    <div className={styles.event}>
      <div className={styles.image}>
        <img src={require("../../assets/image_1.png")} alt={title}></img>
        <div className={styles.date}>
          <p>19</p>
          <p>Jan</p>
          <p>2021</p>
        </div>
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className={styles.action}>
        <Button>Join Event {">"} </Button>
        <div className={styles.info}>
          <p>Admin</p>
          <div>
            <img src={commentIcon} alt="comment"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
