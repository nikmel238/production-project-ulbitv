import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDarkTheme, withLightTheme } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [withLightTheme, StoreDecorator({
    loginForm: { username: '123', password: '123' },
})];

export const PrimaryError = Template.bind({});
PrimaryError.decorators = [withLightTheme, StoreDecorator({
    loginForm: { username: '123', password: '123', error: 'Error error' },
})];

export const isLoadingPrimary = Template.bind({});
isLoadingPrimary.decorators = [withLightTheme, StoreDecorator({
    loginForm: { username: '123', password: '123', isLoading: true },
})];

export const Dark = Template.bind({});
Dark.decorators = [withDarkTheme, StoreDecorator({
    loginForm: { username: '123', password: '123' },
})];
export const DarkError = Template.bind({});
DarkError.decorators = [withLightTheme, StoreDecorator({
    loginForm: { username: '123', password: '123', error: 'Error error' },
})];

export const isLoadingDark = Template.bind({});
isLoadingDark.decorators = [withLightTheme, StoreDecorator({
    loginForm: { username: '123', password: '123', isLoading: true },
})];
