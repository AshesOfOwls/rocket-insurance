import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '.';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {
    firstName: 'Jack',
    lastName: 'Sparrow'
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
