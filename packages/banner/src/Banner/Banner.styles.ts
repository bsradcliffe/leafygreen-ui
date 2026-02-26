import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { BaseFontSize } from '@leafygreen-ui/tokens';
import {
  anchorClassName,
  bodyTypeScaleStyles,
} from '@leafygreen-ui/typography';

import { cn } from '../cn';
import { Variant } from '../shared.types';

export const bannerChildrenContainerClassName = createUniqueClassName(
  'banner-children_container',
);

const baseBannerStyles = [
  'relative',
  'flex',
  'py-[10px]',
  'pl-[20px]',
  'pr-[12px]',
  'border-[1px]',
  'border-l-0',
  'border-solid',
  'rounded-[12px]',
  `font-[${`'Euclid_Circular_A','Helvetica_Neue',Helvetica,Arial,sans-serif`}]`,

  // &::before pseudo-element
  "before:content-['']",
  'before:absolute',
  'before:w-[13px]',
  'before:top-[-1px]',
  'before:bottom-[-1px]',
  'before:left-0',
  'before:rounded-l-[12px]',
  'before:rounded-r-none',
].join(' ');

// -- Dark mode variant styles --

const darkModeInfoBannerStyles = [
  `text-[${palette.blue.light2}]`,
  `border-[${palette.blue.dark2}]`,
  `bg-[${palette.blue.dark3}]`,

  // Anchor styles
  `[&_.${anchorClassName}]:text-[${palette.blue.light3}]`,
  `[&_a]:text-[${palette.blue.light3}]`,
  `[&_.${anchorClassName}:hover]:text-[${palette.blue.light2}]`,
  `[&_a:hover]:text-[${palette.blue.light2}]`,
  `[&_.${anchorClassName}:focus-visible]:shadow-[0_0_0_5px_${palette.blue.dark3},0_0_0_7px_${palette.blue.light1}]`,
  `[&_a:focus-visible]:shadow-[0_0_0_5px_${palette.blue.dark3},0_0_0_7px_${palette.blue.light1}]`,

  // &::before
  `before:bg-[linear-gradient(to_left,transparent_6px,${palette.blue.light1}_6px)]`,
].join(' ');

const darkModeWarningBannerStyles = [
  `text-[${palette.yellow.light2}]`,
  `border-[${palette.yellow.dark2}]`,
  `bg-[${palette.yellow.dark3}]`,

  `[&_.${anchorClassName}]:text-[${palette.yellow.light3}]`,
  `[&_a]:text-[${palette.yellow.light3}]`,
  `[&_.${anchorClassName}:hover]:text-[${palette.yellow.light2}]`,
  `[&_a:hover]:text-[${palette.yellow.light2}]`,
  `[&_.${anchorClassName}:focus-visible]:shadow-[0_0_0_5px_${palette.yellow.dark3},0_0_0_7px_${palette.blue.light1}]`,
  `[&_a:focus-visible]:shadow-[0_0_0_5px_${palette.yellow.dark3},0_0_0_7px_${palette.blue.light1}]`,

  `before:bg-[linear-gradient(to_left,transparent_6px,${palette.yellow.dark2}_6px)]`,
].join(' ');

const darkModeDangerBannerStyles = [
  `text-[${palette.red.light2}]`,
  `border-[${palette.red.dark2}]`,
  `bg-[${palette.red.dark3}]`,

  `[&_.${anchorClassName}]:text-[${palette.red.light3}]`,
  `[&_a]:text-[${palette.red.light3}]`,
  `[&_.${anchorClassName}:hover]:text-[${palette.red.light2}]`,
  `[&_a:hover]:text-[${palette.red.light2}]`,
  `[&_.${anchorClassName}:focus-visible]:shadow-[0_0_0_5px_${palette.red.dark3},0_0_0_7px_${palette.blue.light1}]`,
  `[&_a:focus-visible]:shadow-[0_0_0_5px_${palette.red.dark3},0_0_0_7px_${palette.blue.light1}]`,

  `before:bg-[linear-gradient(to_left,transparent_6px,${palette.red.base}_6px)]`,
].join(' ');

const darkModeSuccessBannerStyles = [
  `text-[${palette.green.light2}]`,
  `border-[${palette.green.dark2}]`,
  `bg-[${palette.green.dark3}]`,

  `[&_.${anchorClassName}]:text-[${palette.green.light3}]`,
  `[&_a]:text-[${palette.green.light3}]`,
  `[&_.${anchorClassName}:hover]:text-[${palette.green.light2}]`,
  `[&_a:hover]:text-[${palette.green.light2}]`,
  `[&_.${anchorClassName}:focus-visible]:shadow-[0_0_0_5px_${palette.green.dark3},0_0_0_7px_${palette.blue.light1}]`,
  `[&_a:focus-visible]:shadow-[0_0_0_5px_${palette.green.dark3},0_0_0_7px_${palette.blue.light1}]`,

  `before:bg-[linear-gradient(to_left,transparent_6px,${palette.green.base}_6px)]`,
].join(' ');

// -- Light mode variant styles --

const lightModeInfoBannerStyles = [
  `text-[${palette.blue.dark2}]`,
  `border-[${palette.blue.light2}]`,
  `bg-[${palette.blue.light3}]`,

  `[&_.${anchorClassName}]:text-[${palette.blue.dark3}]`,
  `[&_a]:text-[${palette.blue.dark3}]`,
  `[&_.${anchorClassName}:hover]:text-[${palette.blue.dark2}]`,
  `[&_a:hover]:text-[${palette.blue.dark2}]`,
  `[&_.${anchorClassName}:focus-visible]:shadow-[0_0_0_3px_${palette.blue.light3},0_0_0_5px_${palette.white},0_0_0_7px_${palette.blue.light1}]`,
  `[&_a:focus-visible]:shadow-[0_0_0_3px_${palette.blue.light3},0_0_0_5px_${palette.white},0_0_0_7px_${palette.blue.light1}]`,

  `before:bg-[linear-gradient(to_left,transparent_6px,${palette.blue.base}_6px)]`,
].join(' ');

const lightModeWarningBannerStyles = [
  `text-[${palette.yellow.dark2}]`,
  `border-[${palette.yellow.light2}]`,
  `bg-[${palette.yellow.light3}]`,

  `[&_.${anchorClassName}]:text-[${palette.yellow.dark3}]`,
  `[&_a]:text-[${palette.yellow.dark3}]`,
  `[&_.${anchorClassName}:hover]:text-[${palette.yellow.dark2}]`,
  `[&_a:hover]:text-[${palette.yellow.dark2}]`,
  `[&_.${anchorClassName}:focus-visible]:shadow-[0_0_0_3px_${palette.yellow.light3},0_0_0_5px_${palette.white},0_0_0_7px_${palette.blue.light1}]`,
  `[&_a:focus-visible]:shadow-[0_0_0_3px_${palette.yellow.light3},0_0_0_5px_${palette.white},0_0_0_7px_${palette.blue.light1}]`,

  `before:bg-[linear-gradient(to_left,transparent_6px,${palette.yellow.base}_6px)]`,
].join(' ');

const lightModeDangerBannerStyles = [
  `text-[${palette.red.dark2}]`,
  `border-[${palette.red.light2}]`,
  `bg-[${palette.red.light3}]`,

  `[&_.${anchorClassName}]:text-[${palette.red.dark3}]`,
  `[&_a]:text-[${palette.red.dark3}]`,
  `[&_.${anchorClassName}:hover]:text-[${palette.red.dark2}]`,
  `[&_a:hover]:text-[${palette.red.dark2}]`,
  `[&_.${anchorClassName}:focus-visible]:shadow-[0_0_0_3px_${palette.red.light3},0_0_0_5px_${palette.white},0_0_0_7px_${palette.blue.light1}]`,
  `[&_a:focus-visible]:shadow-[0_0_0_3px_${palette.red.light3},0_0_0_5px_${palette.white},0_0_0_7px_${palette.blue.light1}]`,

  `before:bg-[linear-gradient(to_left,transparent_6px,${palette.red.base}_6px)]`,
].join(' ');

const lightModeSuccessBannerStyles = [
  `text-[${palette.green.dark2}]`,
  `border-[${palette.green.light2}]`,
  `bg-[${palette.green.light3}]`,

  `[&_.${anchorClassName}]:text-[${palette.green.dark3}]`,
  `[&_a]:text-[${palette.green.dark3}]`,
  `[&_.${anchorClassName}:hover]:text-[${palette.green.dark2}]`,
  `[&_a:hover]:text-[${palette.green.dark2}]`,
  `[&_.${anchorClassName}:focus-visible]:shadow-[0_0_0_3px_${palette.green.light3},0_0_0_5px_${palette.white},0_0_0_7px_${palette.blue.light1}]`,
  `[&_a:focus-visible]:shadow-[0_0_0_3px_${palette.green.light3},0_0_0_5px_${palette.white},0_0_0_7px_${palette.blue.light1}]`,

  `before:bg-[linear-gradient(to_left,transparent_6px,${palette.green.dark1}_6px)]`,
].join(' ');

const variantStyles: Record<Theme, Record<Variant, string>> = {
  [Theme.Dark]: {
    [Variant.Info]: darkModeInfoBannerStyles,
    [Variant.Warning]: darkModeWarningBannerStyles,
    [Variant.Danger]: darkModeDangerBannerStyles,
    [Variant.Success]: darkModeSuccessBannerStyles,
  },
  [Theme.Light]: {
    [Variant.Info]: lightModeInfoBannerStyles,
    [Variant.Warning]: lightModeWarningBannerStyles,
    [Variant.Danger]: lightModeDangerBannerStyles,
    [Variant.Success]: lightModeSuccessBannerStyles,
  },
};

const bannerDismissibleStyles = 'pr-[36px]';

export const getBannerStyles = ({
  baseFontSize,
  className,
  dismissible,
  theme,
  variant,
}: {
  baseFontSize: BaseFontSize;
  className?: string;
  dismissible: boolean;
  theme: Theme;
  variant: Variant;
}) =>
  cn(
    baseBannerStyles,
    bodyTypeScaleStyles[baseFontSize],
    variantStyles[theme][variant],
    { [bannerDismissibleStyles]: dismissible },
    className,
  );

const getTextMargins = (image: boolean, dismissible: boolean) => {
  const defaultIconSize = 16;
  const defaultBorderSpacing = 12;

  const styleObj: {
    marginLeft?: string;
    marginRight?: string;
  } = {
    marginLeft: undefined,
    marginRight: undefined,
  };

  if (image) {
    styleObj.marginLeft = 'ml-[17px]';
    styleObj.marginRight = 'mr-[4px]';
    if (dismissible) {
      styleObj.marginRight = `mr-[${defaultIconSize + defaultBorderSpacing}px]`;
    }
  } else {
    styleObj.marginLeft = 'ml-[13px]';
    styleObj.marginRight = 'mr-[10px]';
    if (dismissible) {
      styleObj.marginRight = `mr-[${defaultIconSize + 16}px]`;
    }
  }

  return styleObj;
};

const textBaseStyles = [
  'self-center',
  'grow',

  // Anchor styles within text container
  `[&_.${anchorClassName}]:text-[length:inherit]`,
  `[&_a]:text-[length:inherit]`,
  `[&_.${anchorClassName}]:leading-[inherit]`,
  `[&_a]:leading-[inherit]`,
  `[&_.${anchorClassName}]:font-semibold`,
  `[&_a]:font-semibold`,
  `[&_.${anchorClassName}]:underline`,
  `[&_a]:underline`,
  `[&_.${anchorClassName}]:underline-offset-[3px]`,
  `[&_a]:underline-offset-[3px]`,
  `[&_.${anchorClassName}]:decoration-[2px]`,
  `[&_a]:decoration-[2px]`,
  `[&_.${anchorClassName}]:rounded-[4px]`,
  `[&_a]:rounded-[4px]`,
  `[&_.${anchorClassName}]:inline`,
  `[&_a]:inline`,

  // Hover / focus / focus-visible: remove outline & hide span::after
  `[&_.${anchorClassName}:hover]:outline-none`,
  `[&_a:hover]:outline-none`,
  `[&_.${anchorClassName}:focus]:outline-none`,
  `[&_a:focus]:outline-none`,
  `[&_.${anchorClassName}:focus-visible]:outline-none`,
  `[&_a:focus-visible]:outline-none`,
  `[&_.${anchorClassName}:hover_span::after]:hidden`,
  `[&_a:hover_span::after]:hidden`,
  `[&_.${anchorClassName}:focus_span::after]:hidden`,
  `[&_a:focus_span::after]:hidden`,
  `[&_.${anchorClassName}:focus-visible_span::after]:hidden`,
  `[&_a:focus-visible_span::after]:hidden`,

  // Focus-visible: position relative
  `[&_.${anchorClassName}:focus-visible]:relative`,
  `[&_a:focus-visible]:relative`,
].join(' ');

export const getChildrenContainerStyles = ({
  dismissible,
  hasImage,
}: {
  dismissible: boolean;
  hasImage: boolean;
}) => {
  const margins = getTextMargins(hasImage, dismissible);

  return cn(
    textBaseStyles,
    margins.marginLeft,
    margins.marginRight,
    bannerChildrenContainerClassName,
  );
};
