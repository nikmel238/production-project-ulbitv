import React from 'react';
import cls from 'widgets/Sidebar/ui/Sidebar/Sidebar.module.scss';
import { Story } from '@storybook/react';

export const withSidebar = (Story: Story) => (
    <div
        className={cls.Sidebar}
    >
        <Story />
    </div>
);
