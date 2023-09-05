import React from 'react';

import classes from './Footer.module.scss'
import Link from "next/link";

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className={classes.footer}>
      <div className={'container'}>
        <div className={classes.inner}>
          © 2023 AI Startup Generator. All Rights Reserved
          <div className={classes.links}>
            <Link href={'/privacy-policy'}>Privacy Policy</Link>
            <Link href={'/terms-and-conditions'}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
