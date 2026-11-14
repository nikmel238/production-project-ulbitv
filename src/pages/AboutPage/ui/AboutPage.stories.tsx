import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { withDarkTheme, withLightTheme } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Light = Template.bind({});
Light.decorators = [withLightTheme];

export const Dark = Template.bind({});
Dark.decorators = [withDarkTheme];
