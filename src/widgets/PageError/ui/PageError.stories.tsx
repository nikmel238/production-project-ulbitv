import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { withDarkTheme, withLightTheme } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

export default {
    title: 'widget/PageError',
    component: PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Light = Template.bind({});
Light.decorators = [
    withLightTheme,
];

export const Dark = Template.bind({});
Dark.decorators = [
    withDarkTheme,
];
