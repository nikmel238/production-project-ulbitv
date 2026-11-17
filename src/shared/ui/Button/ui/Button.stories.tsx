import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { withDarkTheme } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        theme: { control: 'radio', options: Object.values(ButtonTheme) },
        size: { control: 'radio', options: Object.values(ButtonSize) },
        square: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    children: 'Text',
    disabled: true,
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const ClearDisabled = Template.bind({});
ClearDisabled.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
    disabled: true,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const ClearInvertedDisabled = Template.bind({});
ClearInvertedDisabled.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
    disabled: true,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

OutlineDark.decorators = [
    withDarkTheme,
];

export const OutlineDarkDisabled = Template.bind({});
OutlineDarkDisabled.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};

OutlineDarkDisabled.decorators = [
    withDarkTheme,
];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundThemeDisabled = Template.bind({});
BackgroundThemeDisabled.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
    disabled: true,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundInvertedThemeDisabled = Template.bind({});
BackgroundInvertedThemeDisabled.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    disabled: true,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

export const SquareDark = Template.bind({});
SquareDark.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

SquareDark.decorators = [
    withDarkTheme,
];
