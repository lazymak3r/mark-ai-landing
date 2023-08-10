'use client'

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import classNames from "classnames";

import classes from './Header.module.scss'
import {Menu} from "@/components/Menu/Menu";
import {Button} from "@/components/Button/Button";
import {Hamburger} from "@/components/Hamburger/Hamburger";

interface HeaderProps {
}

const SCROLL_SIZE = 50;

export const Header: React.FC<HeaderProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY >= SCROLL_SIZE) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsScrolled(window.scrollY >= SCROLL_SIZE)
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={classNames([classes.header, {[classes.isScrolled]: isScrolled}])}>
      <div className={classNames(['container', classes.container])}>
        <div className={classes.headerWrapper}>
          <div className={classes.headerLeftContent}>
            <Link href="/" className={classes.logo}>AI Startup Generator</Link>
            <div className={classes.navbar}>
              <nav className={classes.navigation}>
                <Link href="/" className={classes.navLink}>Home</Link>
                <Link href="/about" className={classes.navLink}>About</Link>
                <Link href="/contact-us" className={classes.navLink}>Contact Us</Link>
              </nav>
            </div>
          </div>
          <div className={classes.headerRightContent}>
            <Button text={'Get Started'} variant={'secondary'} className={classes.headerButton}/>
            <Hamburger isOpened={isMenuOpen} onClick={() => setIsMenuOpen(prev => !prev)}/>
          </div>
        </div>
      </div>
      <Menu isOpened={isMenuOpen}/>
    </div>
  );
};
