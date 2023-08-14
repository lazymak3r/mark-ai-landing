import React from 'react';

import classes from './Loading.module.scss'
import classNames from "classnames";

interface LoadingProps {
  variant?: 'primary'
}

export const Loading: React.FC<LoadingProps> = ({variant = 'primary'}) => {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classNames([classes.loadingSpinner, classes[variant]])}>
      </div>
    </div>
  );
};

