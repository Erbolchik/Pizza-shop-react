import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  outline?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: void;
};

export function Button(props: ButtonProps) {
  const { outline, children, className } = props;
  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline,
      })}
      onClick={() => alert(children)}>
      {children}
    </button>
  );
}
