import React, { useMemo, useState } from 'react';
import { faker } from '@faker-js/faker';
import {
  storybookArgTypes,
  storybookExcludedControlParams,
  StoryMetaType,
} from '@lg-tools/storybook-utils';
import { StoryFn, StoryObj } from '@storybook/react';

import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import { DarkModeProps, getTheme } from '@leafygreen-ui/lib';
import {
  borderRadius,
  color,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';
import { Body, Subtitle } from '@leafygreen-ui/typography';

import { ContextDrawerProps } from './ContextDrawer/ContextDrawer.types';
import { ContextDrawer } from './ContextDrawer';
import { ContextDrawerButton } from './ContextDrawerButton';

const SEED = 0;
faker.seed(SEED);

const defaultExcludedControls = [
  ...storybookExcludedControlParams,
  'content',
  'onOpenChange',
  'reference',
  'trigger',
];

const meta: StoryMetaType<typeof ContextDrawer> = {
  title: 'Composition/Data Display/ContextDrawer',
  component: ContextDrawer,
  parameters: {
    default: 'LiveExample',
    controls: {
      exclude: [...defaultExcludedControls, 'isOpen'],
    },
    generate: {
      combineArgs: {
        darkMode: [false, true],
        isOpen: [false, true],
      },
      decorator: (Instance, context) => {
        return (
          <LeafyGreenProvider darkMode={context?.args.darkMode}>
            <Instance
              reference={<MockReference darkMode={context?.args.darkMode} />}
              content={<MockContent />}
              trigger={({ isOpen }: { isOpen: boolean }) => (
                <ContextDrawerButton isOpen={isOpen} />
              )}
            />
          </LeafyGreenProvider>
        );
      },
    },
  },
  args: {
    darkMode: false,
    defaultOpen: false,
    expandedHeight: 160,
  },
  argTypes: {
    darkMode: storybookArgTypes.darkMode,
  },
};
export default meta;

const MockReference = ({ darkMode }: DarkModeProps) => {
  const fillerText = useMemo(() => faker.lorem.paragraphs(2), []);

  return (
    <div
      style={{
        overflow: 'hidden',
        padding: `${spacing[400]}px`,
        height: '200px',
        border: `1px solid ${color[getTheme(!!darkMode)].border[Variant.Secondary][InteractionState.Default]}`,
        borderRadius: `${borderRadius[400]}px`,
        display: 'flex',
        flexDirection: 'column',
        gap: `${spacing[200]}px`,
      }}
    >
      <Subtitle>Reference Element</Subtitle>
      <Body>{fillerText}</Body>
    </div>
  );
};

const MockContent = () => {
  const fillerText = useMemo(() => faker.lorem.paragraphs(10), []);

  return (
    <div style={{ padding: `${spacing[400]}px` }}>
      <Subtitle>Content Element</Subtitle>
      <Body>{fillerText}</Body>
    </div>
  );
};

const TemplateComponent: StoryFn<ContextDrawerProps> = (
  props: ContextDrawerProps,
) => {
  const [isOpen, setIsOpen] = useState(props.defaultOpen);

  const isOpenVal = props.isOpen ?? isOpen;

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ContextDrawer
      {...props}
      className="w-full"
      reference={<MockReference darkMode={props.darkMode} />}
      content={<MockContent />}
      trigger={
        <ContextDrawerButton isOpen={isOpenVal} onClick={toggle}>
          {isOpenVal ? 'Hide' : 'View'}
        </ContextDrawerButton>
      }
      isOpen={isOpenVal}
    />
  );
};

export const LiveExample: StoryObj<ContextDrawerProps> = {
  render: TemplateComponent,
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
};

export const Controlled: StoryObj<ContextDrawerProps> = {
  render: TemplateComponent,
  parameters: {
    controls: {
      exclude: [...defaultExcludedControls, 'defaultOpen', 'expandedHeight'],
    },
    chromatic: {
      disableSnapshot: true,
    },
  },
  args: {
    isOpen: true,
  },
};

export const Generated: StoryObj<ContextDrawerProps> = {
  render: () => <></>,
};
