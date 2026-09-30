import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LangSwitcher } from './LangSwitcher';

export default {
    title: 'shared/LangSwitcher',
    component: LangSwitcher,
    args: {
        long: false,
    },
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const Short = Template.bind({});
Short.args = {
    long: false,
};

export const Long = Template.bind({});
Long.args = {
    long: true,
};
