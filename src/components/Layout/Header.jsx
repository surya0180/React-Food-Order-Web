import React from "react";
import classes from "./Header.module.css";
import mealsImage from  "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onShowCart={props.onShowCart}></HeaderCardButton>
      </header>
      <div className={classes['main-image']}>
        <img
          src={mealsImage}
          alt="headerImg"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
