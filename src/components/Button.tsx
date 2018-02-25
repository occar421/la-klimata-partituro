import * as React from 'react';

export default (props: {
    // tslint:disable-next-line:no-any
    children?: any;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}) =>
    <button onClick={props.onClick}>{props.children}</button>;
