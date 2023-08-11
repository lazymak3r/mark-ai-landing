'use client'

import React from 'react';
import classNames from "classnames";

import classes from "./Button.module.scss";

interface ButtonProps {
  text: string,
  variant?: 'primary' | 'secondary',
  className?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({text, className, variant = 'primary', onClick}) => {
  return (
    <div
      role={'button'}
      className={classNames([classes.button, `${variant}-button`, className])} onClick={onClick}
    >
      {text}
    </div>
  );
};
