import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDarkTheme } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        theme: { control: 'radio', options: Object.values(TextTheme) },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title Title',
    text: 'This is a description',
};

export const PrimaryOnlyTitle = Template.bind({});
PrimaryOnlyTitle.args = {
    title: 'Title Title',
};

export const PrimaryOnlyDescription = Template.bind({});
PrimaryOnlyDescription.args = {
    text: 'This is a description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title Title',
    text: 'This is a description',
};
PrimaryDark.decorators = [
    withDarkTheme,
];

export const PrimaryOnlyTitleDark = Template.bind({});
PrimaryOnlyTitleDark.args = {
    title: 'Title Title',
};
PrimaryOnlyTitleDark.decorators = [
    withDarkTheme,
];

export const PrimaryOnlyDescriptionDark = Template.bind({});
PrimaryOnlyDescriptionDark.args = {
    text: 'This is a description',
};
PrimaryOnlyDescriptionDark.decorators = [
    withDarkTheme,
];

export const Error = Template.bind({});
Error.args = {
    title: 'Title Title',
    text: 'This is a description',
    theme: TextTheme.ERROR,
};

export const ErrorOnlyTitle = Template.bind({});
ErrorOnlyTitle.args = {
    title: 'Title Title',
    theme: TextTheme.ERROR,
};

export const ErrorOnlyDescription = Template.bind({});
ErrorOnlyDescription.args = {
    text: 'This is a description',
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title Title',
    text: 'This is a description',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [
    withDarkTheme,
];

export const ErrorOnlyTitleDark = Template.bind({});
ErrorOnlyTitleDark.args = {
    title: 'Title Title',
    theme: TextTheme.ERROR,
};
ErrorOnlyTitleDark.decorators = [
    withDarkTheme,
];

export const ErrorOnlyDescriptionDark = Template.bind({});
ErrorOnlyDescriptionDark.args = {
    text: 'This is a description',
    theme: TextTheme.ERROR,
};
ErrorOnlyDescriptionDark.decorators = [
    withDarkTheme,
];
