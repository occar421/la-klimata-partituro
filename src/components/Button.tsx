import * as React from 'react';

import * as style from './Button.css';

/**
 * Very simple Button for example.
 */
export default (props: {
  /**
   * Button content string
   */
  children?: string;
  /**
   * Event handler when the user clicks this button.
   * @param event Event argument for `onClick`
   */
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}) => (
  <button
    className={[style.button, style.buttonExtra].join(' ')}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
