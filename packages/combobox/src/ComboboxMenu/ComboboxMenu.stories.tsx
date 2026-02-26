/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from 'react';
import { StoryMetaType, StoryType } from '@lg-tools/storybook-utils';

import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';

import { ComboboxContext } from '../ComboboxContext';
import { defaultContext } from '../ComboboxContext/ComboboxContext';

import { ComboboxMenu } from './ComboboxMenu';

const meta: StoryMetaType<typeof ComboboxMenu> = {
  title: 'Components/Inputs/Combobox/ComboboxMenu',
  component: ComboboxMenu,
  parameters: {
    default: null,
    generate: {
      combineArgs: {
        darkMode: [false, true],
      },
      decorator: (Instance, context) => {
        const [open, setOpen] = useState(false);
        useEffect(() => {
          setOpen(true);
        }, []);
        const divRef = React.useRef<HTMLDivElement>(null);
        return (
          <LeafyGreenProvider darkMode={context?.args.darkMode}>
            <ComboboxContext.Provider
              value={{ ...defaultContext, isOpen: open }}
            >
              <style>{`td:has(.combobox-menu-placeholder) { vertical-align: top; }`}</style>
              <div
                ref={divRef}
                className="combobox-menu-placeholder"
                style={{ height: 0, color: 'transparent' }}
              >
                SearchInput Placeholder
              </div>
              <Instance refEl={divRef} />
            </ComboboxContext.Provider>
          </LeafyGreenProvider>
        );
      },
    },
  },
};

export default meta;

export const Generated: StoryType<typeof ComboboxMenu> = () => <></>;
Generated.parameters = {
  chromatic: {
    disableSnapshot: true,
  },
};
