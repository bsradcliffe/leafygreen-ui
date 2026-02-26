import React from 'react';
import {
  storybookArgTypes,
  storybookExcludedControlParams,
  StoryMetaType,
} from '@lg-tools/storybook-utils';
import { StoryFn } from '@storybook/react';

import LeafygreenProvider from '@leafygreen-ui/leafygreen-provider';

import Checkbox, { CheckboxProps } from '.';

const descriptionText = `This is a description for the checkbox`;

const meta: StoryMetaType<typeof Checkbox> = {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    default: 'LiveExample',
    controls: {
      exclude: [...storybookExcludedControlParams, 'checked'],
    },
    generate: {
      combineArgs: {
        darkMode: [false, true],
        checked: [true, false],
        indeterminate: [false, true],
        bold: [true, false],
        disabled: [false, true],
        description: [undefined, descriptionText],
        label: ['I agree to this thing', undefined],
      },
      excludeCombinations: [
        [
          // Skip description when label is undefined
          'description',
          {
            label: undefined,
          },
        ],
        {
          // Skip bold when label is undefined
          bold: true,
          label: undefined,
        },
        {
          checked: true,
          indeterminate: true,
        },
      ],
      args: {
        style: {
          textAlign: 'initial' as const,
          maxWidth: 300,
        },
      },
    },
  },
  args: {
    animate: true,
    label: 'I agree to this thing.',
    description: descriptionText,
    style: {
      maxWidth: 700,
    },
  },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    darkMode: storybookArgTypes.darkMode,
    disabled: { control: 'boolean' },
    bold: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    animate: { control: 'boolean', default: true },
    baseFontSize: storybookArgTypes.baseFontSize,
  },
};
export default meta;

type BaseFontSize = 14 | 16;
type StoryCheckboxProps = CheckboxProps & { baseFontSize: BaseFontSize };

export const LiveExample: StoryFn<StoryCheckboxProps> = ({
  baseFontSize,
  ...args
}: StoryCheckboxProps) => (
  <LeafygreenProvider baseFontSize={baseFontSize}>
    <Checkbox {...args} />
  </LeafygreenProvider>
);

LiveExample.parameters = {
  chromatic: {
    disableSnapshot: true,
  },
};
export const Controlled = LiveExample.bind({});
Controlled.parameters = {
  controls: {
    exclude: [...storybookExcludedControlParams],
  },
  chromatic: {
    disableSnapshot: true,
  },
};
Controlled.args = {
  checked: false,
};
Controlled.argTypes = {
  checked: { control: 'boolean' },
};

export const Generated = () => {};
