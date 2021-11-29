import classnames from 'classnames';

import s from './Typography.module.css';

export interface BaseTextProps {
  Element?: 'p' | 'h1' | 'h2'
  children: React.ReactNode
  bold?: boolean
}

const BaseText = (props: BaseTextProps) => {
  const { Element = 'p', children, bold } = props;

  return (
    <Element
      className={classnames({ [s.bold]: bold })}
    >
      { children }
    </Element>
  );
}

export default BaseText;

const Body = (props: BaseTextProps) => {
  const { children, ...otherProps } = props;
  
  return <BaseText Element='p' {...otherProps}>{ children }</BaseText>;
};

export { Body };

const H1 = (props: BaseTextProps) => {
  const { children, ...otherProps } = props;
  
  return <BaseText Element='h1' {...otherProps}>{ children }</BaseText>;
};

export { H1 };