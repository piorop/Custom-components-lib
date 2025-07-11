import { Meta, StoryObj } from '@storybook/react/*';
import Select from './Select';
import React, { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Test1: Story = {
  name: 'Simple test(without change value)',
  args: {
    label: 'Age',
    children: (
      <>
        <option>Ten</option>
        <option>Twenty</option>
        <option>Thirty</option>
      </>
    ),
  },
};

export const Test2: Story = {
  name: 'Selected value Test',
  args: {
    label: 'Age',
  },
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <Select
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option>Ten</option>
        <option>Twenty</option>
        <option>Thirty</option>
      </Select>
    );
  },
};
