import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography, {
  Body as BodyComponent,
  Small as SmallComponent,
  LabelText as LabelTextComponent,
  ButtonText as ButtonTextComponent,
  H1 as H1Component,
  H2 as H2Component,
  H3 as H3Component,
  H4 as H4Component,
} from '.';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  args: {
    children: 'Default Copy',
    bold: false
  },
} as ComponentMeta<typeof Typography>;

const BodyTemplate: ComponentStory<typeof BodyComponent> = (args) => <BodyComponent {...args} />;

export const Body = BodyTemplate.bind({});
Body.args = {
  children: 'Body Text',
};

const SmallTemplate: ComponentStory<typeof SmallComponent> = (args) => <SmallComponent {...args} />;

export const Small = SmallTemplate.bind({});
Small.args = {
  children: 'Small Text',
};

const LabelTextTemplate: ComponentStory<typeof LabelTextComponent> = (args) => <LabelTextComponent {...args} />;

export const LabelText = LabelTextTemplate.bind({});
LabelText.args = {
  children: 'LabelText Text',
};

const ButtonTextTemplate: ComponentStory<typeof ButtonTextComponent> = (args) => <ButtonTextComponent {...args} />;

export const ButtonText = ButtonTextTemplate.bind({});
ButtonText.args = {
  children: 'ButtonText Text',
};

const H1Template: ComponentStory<typeof H1Component> = (args) => <H1Component {...args} />;

export const Header1 = H1Template.bind({});
Header1.args = {
  children: 'Header 1',
};

const H2Template: ComponentStory<typeof H2Component> = (args) => <H2Component {...args} />;

export const Header2 = H2Template.bind({});
Header2.args = {
  children: 'Header 2',
};

const H3Template: ComponentStory<typeof H3Component> = (args) => <H3Component {...args} />;

export const Header3 = H3Template.bind({});
Header3.args = {
  children: 'Header 3',
};

const H4Template: ComponentStory<typeof H4Component> = (args) => <H4Component {...args} />;

export const Header4 = H4Template.bind({});
Header4.args = {
  children: 'Header 4',
};
