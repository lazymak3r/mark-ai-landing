import React from 'react';
import classNames from "classnames";

import classes from "./Button.module.scss";

interface ButtonProps {
  text: string,
  variant?: 'primary' | 'secondary',
  className?: string
};

export const Button: React.FC<ButtonProps> = ({text, className, variant = 'primary'}) => {
  return (
    <div className={classNames([classes.button, `${variant}-button`, className])}>
      {text}
    </div>
  );
};
