import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDarkTheme, withLightTheme } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [
    withLightTheme,
    StoreDecorator({}),
];

export const AuthDataPrimary = Template.bind({});
AuthDataPrimary.decorators = [
    withLightTheme,
    StoreDecorator({ user: { authData: {} } }),
];

export const Dark = Template.bind({});
Dark.decorators = [
    withDarkTheme,
    StoreDecorator({}),
];

export const AuthDataDark = Template.bind({});
AuthDataDark.decorators = [
    withDarkTheme,
    StoreDecorator({ user: { authData: {} } }),
];
