import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDarkTheme, withLightTheme } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { LoginModal } from './LoginModal';

export default {
    title: 'features/LoginModal',
    component: LoginModal,
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

const LoginModalArgs = {
    isOpen: true,
};

export const Primary = Template.bind({});
Primary.args = {
    ...LoginModalArgs,
};
Primary.decorators = [withLightTheme];

export const Dark = Template.bind({});
Dark.args = {
    ...LoginModalArgs,
};
Dark.decorators = [withDarkTheme];
