import React, { MouseEventHandler, useState } from 'react';
import { StoryMetaType } from '@lg-tools/storybook-utils';

import { HTMLElementProps } from '@leafygreen-ui/lib';

import palette from './palette';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Returns a readable foreground color (black or white) for a given background hex color.
 * Handles 3, 6, and 8-character hex values (ignoring alpha channel).
 */
function readableColor(bgColor: string): string {
  const hex = bgColor.replace('#', '');

  let fullHex: string;

  if (hex.length === 3) {
    // Shorthand: #RGB -> #RRGGBB
    fullHex = hex
      .split('')
      .map(c => c + c)
      .join('');
  } else if (hex.length === 8) {
    // 8-char hex with alpha (#RRGGBBAA) -- ignore alpha
    fullHex = hex.substring(0, 6);
  } else {
    fullHex = hex;
  }

  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return '#000';
  }

  // W3C relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000' : '#fff';
}

type HueName = keyof typeof palette;
const baseHues: Array<HueName> = ['white', 'black', 'transparent'];

const isBaseHue = (hue: HueName): hue is 'white' | 'black' | 'transparent' => {
  return baseHues.includes(hue);
};

const ShadeNames = [
  'dark4',
  'dark3',
  'dark2',
  'dark1',
  'base',
  'light1',
  'light2',
  'light3',
] as const;
type ShadeName = (typeof ShadeNames)[number];

interface ColorBlockProps extends HTMLElementProps<'div'> {
  hue: HueName;
  name: string;
  shade?: ShadeName;
}

const BLOCK_WIDTH = 88;

const copiedOverlayClassName = cn(
  'absolute',
  'top-0',
  'left-0',
  'w-full',
  'h-full',
  'flex',
  'items-center',
  'justify-center',
  "font-['Euclid_Circular_A','Helvetica_Neue',Helvetica,Arial,sans-serif]",
  'rounded-[inherit]',
);

const colorBlockWrapperClassName = cn(
  'inline-block',
  'relative',
  `w-[${BLOCK_WIDTH}px]`,
  'pb-[16px]',
);

const colorBlockClassName = cn(
  'relative',
  'outline-none',
  'border-none',
  'border-t-transparent',
  'w-full',
  'pb-[100%]',
  'rounded-[8px]',
  'cursor-pointer',
  'align-top',
  'focus-visible:[box-shadow:0_0_0_2px_white,0_0_0_4px_#0498ec]',
);

const hexLabelClassName = cn(
  'w-[calc(100%-1em)]',
  'absolute',
  'left-1/2',
  'm-auto',
  'text-[13px]',
  'text-center',
  'py-[3px]',
  'px-[0.3rem]',
  'rounded-[4px]',
  '-translate-x-1/2',
  '-translate-y-[125%]',
  'pointer-events-none',
);

const nameLabelClassName = cn(
  'text-center',
  `text-[${palette.gray.dark1}]`,
  'm-auto',
  'py-[0.3em]',
);

const colorRowClassName = cn(
  `grid-cols-[repeat(${ShadeNames.length},${BLOCK_WIDTH}px)]`,
  'grid',
  'gap-[24px]',
);

function ColorBlock({ hue, shade, ...rest }: ColorBlockProps) {
  const [wasCopied, setWasCopied] = useState<boolean>();
  const name = `${hue} ${shade ?? ''}`;

  let color: string;

  if (isBaseHue(hue)) {
    color = palette[hue];
  } else {
    shade = shade ?? 'base';
    color = (palette[hue] as Record<ShadeName, string>)[shade];
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    navigator.clipboard.writeText(color);
    setWasCopied(true);
    setTimeout(() => {
      setWasCopied(false);
    }, 2000);
  };

  return (
    <div
      className={colorBlockWrapperClassName}
      style={{
        gridColumn: shade ? ShadeNames.indexOf(shade) + 1 : '0',
      }}
      {...rest}
    >
      <button
        className={colorBlockClassName}
        style={{
          transition: 'all 0.3s ease',
          backgroundColor: color,
          boxShadow: `0 8px 6px -8px color-mix(in srgb, ${color} 30%, black), 0 2px 3px color-mix(in srgb, ${color} 20%, black)`,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            `0 8px 6px -8px color-mix(in srgb, ${color} 30%, black), 0 2px 3px color-mix(in srgb, ${color} 50%, black)`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = '';
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            `0 8px 6px -8px color-mix(in srgb, ${color} 30%, black), 0 2px 3px color-mix(in srgb, ${color} 20%, black)`;
        }}
        onClick={handleClick}
      >
        {wasCopied && (
          <div
            className={copiedOverlayClassName}
            style={{ color: readableColor(color) }}
          >
            Copied!
          </div>
        )}
      </button>
      {!wasCopied && (
        <div
          className={hexLabelClassName}
          style={{
            color: readableColor(color),
            backgroundColor: `color-mix(in srgb, ${color} 80%, white)`,
          }}
        >
          {color}
        </div>
      )}
      <div className={nameLabelClassName}>{name}</div>
    </div>
  );
}

const meta: StoryMetaType<any> = {
  title: 'Internal/Palette',
  component: null,
  parameters: {
    default: 'AllColors',
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export function LiveExample() {
  const allColors = Object.keys(palette);
  const hues = (allColors as Array<keyof typeof palette>).slice(
    baseHues.length,
    allColors.length,
  ); // remove black and white

  return (
    <div>
      <div className={colorRowClassName}>
        <ColorBlock hue="white" name="white" />
        <ColorBlock hue="black" name="black" />
        <ColorBlock hue="transparent" name="transparent" />
      </div>
      {hues.map(hue => {
        const hueValues = palette[hue];

        return (
          <div key={hue} className={colorRowClassName}>
            {(Object.keys(hueValues) as Array<keyof typeof hueValues>).map(
              shade => (
                <ColorBlock
                  key={hueValues[shade]}
                  hue={hue}
                  shade={shade}
                  name={`${hue} ${shade}`}
                />
              ),
            )}
          </div>
        );
      })}
    </div>
  );
}
