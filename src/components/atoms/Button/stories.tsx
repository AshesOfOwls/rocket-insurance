import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    onClick: () => {},
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click me',
  buttonType: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Click me',
  buttonType: 'secondary',
};
