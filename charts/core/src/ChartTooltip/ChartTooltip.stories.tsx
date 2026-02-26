import React from 'react';
import { storybookArgTypes } from '@lg-tools/storybook-utils';
import type { StoryFn, StoryObj } from '@storybook/react';

import { Icon } from '@leafygreen-ui/icon';
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import {
  borderRadius,
  color,
  fontFamilies,
  fontWeights,
  InteractionState,
  Variant,
} from '@leafygreen-ui/tokens';

import {
  CustomTooltip,
  CustomTooltipProps,
  sampleTooltipParams,
} from './CustomTooltip';

const TOOLTIP_WIDTH = 270;

const TooltipRoot = (Story: StoryFn, ctx: any) => {
  const theme = ctx.args.darkMode ? 'dark' : 'light';

  return (
    <LeafyGreenProvider darkMode={!!ctx.args.darkMode}>
      <div
        style={{
          width: TOOLTIP_WIDTH,
          overflow: 'hidden',
          backgroundColor:
            color[theme].background[Variant.InversePrimary][
              InteractionState.Default
            ],
          color:
            color[theme].text[Variant.InversePrimary][
              InteractionState.Default
            ],
          borderRadius: borderRadius[150],
          fontFamily: fontFamilies.default,
          fontSize: 12,
          lineHeight: '20px',
          fontWeight: fontWeights.regular,
        }}
      >
        <Story />
      </div>
    </LeafyGreenProvider>
  );
};

export default {
  title: 'Composition/Charts/ChartTooltip',
  component: CustomTooltip,
  decorators: [TooltipRoot],
  args: {
    seriesData: sampleTooltipParams,
  },
  argTypes: {
    chartId: {
      table: {
        disable: true,
      },
    },
    darkMode: storybookArgTypes.darkMode,
    headerFormatter: {
      table: {
        disable: true,
      },
    },
    seriesData: {
      table: {
        disable: true,
      },
    },
    seriesNameFormatter: {
      table: {
        disable: true,
      },
    },
    seriesValueFormatter: {
      table: {
        disable: true,
      },
    },
    sort: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    generate: {
      combineArgs: {
        darkMode: [false, true],
        tooltipPinned: [false, true],
      },
      decorator: TooltipRoot,
    },
  },
} as StoryObj<CustomTooltipProps>;

export const Default: StoryObj<CustomTooltipProps> = {
  args: {
    seriesData: sampleTooltipParams.map((series, idx) => ({
      ...series,
      seriesName: 'Series ' + (idx + 1),
    })),
  },
};

export const Generated = () => {};

export const LongSeriesNames: StoryObj<CustomTooltipProps> = {};

export const CustomFormats: StoryObj<CustomTooltipProps> = {
  args: {
    seriesNameFormatter: (name: number | string | Date) => {
      const formattedName =
        name instanceof Date ? name.toLocaleDateString() : name;

      const concatenatedName =
        typeof formattedName === 'string'
          ? `${formattedName.substring(0, 16)}...${formattedName.slice(-5)}`
          : formattedName;

      return (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '4px',
          }}
        >
          <Icon glyph="Secondary" /> <span>{concatenatedName}</span>
        </div>
      );
    },

    seriesValueFormatter: (value: number | string | Date) => {
      const formattedValue =
        value instanceof Date ? value.toLocaleDateString() : value;

      return `${formattedValue} m/s`;
    },
  },
};
