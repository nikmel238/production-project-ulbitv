import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDarkTheme, withLightTheme } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

const modalArgs = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at atque consectetur, et eveniet fugit iusto nihil officia quam repudiandae.',
};

export const Primary = Template.bind({});
Primary.args = { ...modalArgs };
Primary.decorators = [
    withLightTheme,
];

export const Dark = Template.bind({});
Dark.args = { ...modalArgs };

Dark.decorators = [
    withDarkTheme,
];
