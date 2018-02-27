import * as React from 'react';

import * as style from './Button.css';

// @ts-ignore
export default (props: {
  // tslint:disable-next-line:no-any
  children?: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}) => (
  // *style.button*/
  <button
    className={[style.button, style.buttonExtra].join(' ')}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
