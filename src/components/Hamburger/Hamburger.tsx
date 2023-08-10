'use client'

import React from 'react';
import classNames from "classnames";

import classes from './Hamburger.module.scss'

interface HamburgerProps {
  isOpened: boolean,
  onClick?: () => void
}

export const Hamburger: React.FC<HamburgerProps> = ({isOpened = false, onClick}) => {
  return (
    <div
      tabIndex={0}
      role="button"
      onClick={onClick}
      className={classNames([classes.menuButton, {[classes.isOpened]: isOpened}])}
    >
      <div className={classNames([classes.hamburgerMenuBar, classes.top])}/>
      <div className={classNames([classes.hamburgerMenuBar, classes.bottom])}/>
    </div>
  );
};
