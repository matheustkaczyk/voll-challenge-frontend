import * as React from 'react';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  handleClick: () => void;
  classN: string;
}