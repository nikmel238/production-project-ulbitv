import React from 'react';
import { ComponentMeta, ComponentStory, StoryContext } from '@storybook/react';
import { withDarkTheme, withLightTheme } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { within } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.decorators = [
    withLightTheme,
];

export const LightCollapsed = Template.bind({});

LightCollapsed.decorators = [withLightTheme];

LightCollapsed.play = async ({ canvasElement }: StoryContext) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId('sidebar-toggle');

    userEvent.click(button);
    button.blur();
};

export const Dark = Template.bind({});
Dark.decorators = [
    withDarkTheme,
];

export const DarkCollapsed = Template.bind({});

DarkCollapsed.decorators = [withDarkTheme];

DarkCollapsed.play = async ({ canvasElement }: StoryContext) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId('sidebar-toggle');

    userEvent.click(button);
    button.blur();
};
