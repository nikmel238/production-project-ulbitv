import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDarkTheme, withLightTheme } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { withSidebar } from 'shared/config/storybook/SidebarDecorator/SidebarDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [
    withSidebar,
    withLightTheme,

];

export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [
    withSidebar,
    withDarkTheme,
];
