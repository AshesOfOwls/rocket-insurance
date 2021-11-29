import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography, {
  Body as BodyComponent,
  H1 as H1Component
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

const H1Template: ComponentStory<typeof H1Component> = (args) => <H1Component {...args} />;

export const Header1 = H1Template.bind({});
Header1.args = {
  children: 'Header 1',
};
