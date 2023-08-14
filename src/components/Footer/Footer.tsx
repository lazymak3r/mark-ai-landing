import React from 'react';

import classes from './Footer.module.scss'

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className={classes.footer}>
      <div className={'container'}>
        <div className={classes.inner}>
          © 2023 AI Startup Generator. All Rights Reserved
        </div>
      </div>
    </div>
  );
};
