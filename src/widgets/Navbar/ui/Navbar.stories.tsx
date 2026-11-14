import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDarkTheme, withLightTheme } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [
    withLightTheme,
];

export const Dark = Template.bind({});
Dark.decorators = [
    withDarkTheme,
];
