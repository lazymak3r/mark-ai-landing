'use client'

import React from 'react';
import classNames from "classnames";

import classes from './Menu.module.scss'
import Link from "next/link";

interface MenuProps {
  isOpened: boolean,
}

export const Menu: React.FC<MenuProps> = ({isOpened = false}) => {
  return (
    <div className={classNames([classes.menuOverlay, {[classes.isOpened]: isOpened}])}>
      <div
        className={classes.menu}
      >
        <div className={'container'}>
          <nav className={classes.navigation}>
            <Link href="/" className={classes.navLink}>Home</Link>
            <Link href="/about" className={classes.navLink}>About</Link>
            <Link href="/contact-us" className={classes.navLink}>Contact Us</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
