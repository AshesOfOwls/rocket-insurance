import classnames from 'classnames';

import s from './Typography.module.css';

export interface BaseTextProps {
  Element?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  textType?: 'small' | 'labelText' | 'body' | 'buttonText' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: React.ReactNode
  bold?: boolean
  uppercase?: boolean
  style?: any
}

const BaseText = (props: BaseTextProps) => {
  const { Element = 'p', children, bold, uppercase, textType = 'body', style } = props;

  return (
    <Element
      className={classnames([s[textType]], { [s.bold]: bold, [s.uppercase]: uppercase })}
      style={style}
    >
      { children }
    </Element>
  );
}

export default BaseText;

const Body = (props: BaseTextProps) => {
  const { children, ...otherProps } = props;
  
  return (
    <BaseText Element='p' {...otherProps} textType="body">
      { children }
    </BaseText>
  );
};

export { Body };

const LabelText = (props: BaseTextProps) => {
  const { children, ...otherProps } = props;
  
  return (
    <BaseText Element='p' {...otherProps} textType="labelText">
      { children }
    </BaseText>
  );
};

export { LabelText };

const Small = (props: BaseTextProps) => {
  const { children, ...otherProps } = props;
  
  return (
    <BaseText Element='p' {...otherProps} textType="small">
      { children }
    </BaseText>
  );
};

export { Small };

const ButtonText = (props: BaseTextProps) => {
  const { children, ...otherProps } = props;
  
  return (
    <BaseText Element='p' {...otherProps} textType="buttonText" bold>
      { children }
    </BaseText>
  );
};

export { ButtonText };

const H1 = (props: BaseTextProps) => {
  const { children, ...otherProps } = props;
  
  return (
    <BaseText Element='h1' {...otherProps} textType="h1" bold>
      { children }
    </BaseText>
  );
};

export { H1 };

const H2 = (props: BaseTextProps) => {
  const { children, ...otherProps } = props;

  return (
    <BaseText Element='h2' {...otherProps} textType="h2" bold>
      { children }
    </BaseText>
  );
};

export { H2 };

const H3 = (props: BaseTextProps) => {
  const { children, ...otherProps } = props;

  return (
    <BaseText Element='h3' {...otherProps} textType="h3" bold>
      { children }
    </BaseText>
  );
};

export { H3 };

const H4 = (props: BaseTextProps) => {
  const { children, ...otherProps } = props;

  return (
    <BaseText Element='h4' {...otherProps} textType="h4" bold>
      { children }
    </BaseText>
  );
};

export { H4 };

const H5 = (props: BaseTextProps) => {
  const { children, ...otherProps } = props;

  return (
    <BaseText Element='h5' {...otherProps} textType="h5" bold>
      { children }
    </BaseText>
  );
};

export { H5 };