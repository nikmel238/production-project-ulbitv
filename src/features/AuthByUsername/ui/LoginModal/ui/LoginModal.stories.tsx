import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDarkTheme, withLightTheme } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
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
Primary.decorators = [withLightTheme, StoreDecorator({
    loginForm: { username: '123', password: '123' },
})];

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    ...LoginModalArgs,
};
PrimaryError.decorators = [withLightTheme, StoreDecorator({
    loginForm: { username: '123', password: '123', error: 'Error error' },
})];

export const Dark = Template.bind({});
Dark.args = {
    ...LoginModalArgs,
};
Dark.decorators = [withDarkTheme, StoreDecorator({
    loginForm: { username: '123', password: '123' },
})];

export const DarkError = Template.bind({});
DarkError.args = {
    ...LoginModalArgs,
};
DarkError.decorators = [withDarkTheme, StoreDecorator({
    loginForm: { username: '123', password: '123', error: 'Error error' },
})];
