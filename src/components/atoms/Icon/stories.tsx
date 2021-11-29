import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '.';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    name: 'coffee',
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
