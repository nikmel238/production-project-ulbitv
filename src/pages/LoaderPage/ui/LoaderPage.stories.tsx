import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDarkTheme, withLightTheme } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { LoaderPage } from './LoaderPage';

export default {
    title: 'pages/LoaderPage',
    component: LoaderPage,
} as ComponentMeta<typeof LoaderPage>;

const Template: ComponentStory<typeof LoaderPage> = (args) => <LoaderPage {...args} />;

export const Light = Template.bind({});
Light.decorators = [withLightTheme];

export const Dark = Template.bind({});
Dark.decorators = [withDarkTheme];
