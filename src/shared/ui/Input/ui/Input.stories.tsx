import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from 'shared/ui/Input';
import { withDarkTheme } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const LightWithPlaceholder = Template.bind({});
LightWithPlaceholder.args = {
    placeholder: 'Type text',
    value: '123',
};

export const DarkWithPlaceholder = Template.bind({});
DarkWithPlaceholder.args = {
    placeholder: 'Type text',
    value: '123',
};

DarkWithPlaceholder.decorators = [
    withDarkTheme,
];

export const LightWithoutPlaceholder = Template.bind({});
LightWithoutPlaceholder.args = {
    value: '123',
};

export const DarkWithoutPlaceholder = Template.bind({});
DarkWithoutPlaceholder.args = {
    value: '123',
};

DarkWithoutPlaceholder.decorators = [
    withDarkTheme,
];
