import React from 'react';
import {
  storybookArgTypes,
  storybookExcludedControlParams,
  StoryMetaType,
} from '@lg-tools/storybook-utils';
import { StoryFn } from '@storybook/react';

import { DarkModeProps } from '@leafygreen-ui/lib';
import { Size } from '@leafygreen-ui/tokens';
import { Body, InlineCode } from '@leafygreen-ui/typography';

import { PageLoader, Spinner } from '.';

const meta: StoryMetaType<any> = {
  title: 'Composition/Loading/LoadingIndicator',
  argTypes: {
    darkMode: storybookArgTypes.darkMode,
    description: { control: 'text' },
  },
  parameters: {
    default: 'LiveExample',
    controls: {
      exclude: [...storybookExcludedControlParams],
    },
    chromatic: {
      disableSnapshot: true,
    },
  },
};

export default meta;

const storyRootStyles =
  'flex gap-[48px] items-end flex-wrap justify-center py-[10px]';

const displayOptionContainerStyles = 'flex flex-col items-center';

const labelStyles = 'mt-[20px]';

const Template: StoryFn<typeof Spinner> = (
  props: {
    description?: string;
  } & DarkModeProps,
) => (
  <div className={storyRootStyles}>
    {Object.values(Size).map(size => (
      <div key={size}>
        <Spinner size={size} {...props} />
        <Body className={labelStyles} weight="medium">
          <InlineCode>{size}</InlineCode> Spinner
        </Body>
      </div>
    ))}
    <div className={displayOptionContainerStyles}>
      <PageLoader {...props} />
      <Body className={labelStyles} weight="medium">
        Blob Loader
      </Body>
    </div>
  </div>
);

export const LiveExample = Template.bind({});
