import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

import {
  type RichLinkBadgeColor,
  RichLinkBadgeColors,
} from './RichLinkBadge.types';

export const baseStyles = [
  'inline-flex',
  `gap-[${spacing[50]}px]`,
  'items-center',
  `rounded-[${spacing[100]}px]`,
  `px-[${spacing[100]}px]`,
  'py-0',
].join(' ');

export const badgeVariants: Record<
  Theme,
  Record<RichLinkBadgeColor, string>
> = {
  [Theme.Dark]: {
    [RichLinkBadgeColors.Gray]: [
      `bg-[${palette.gray.dark2}]`,
      `[&_svg]:text-[${palette.gray.light1}]`,
      `[&_p]:text-[${palette.gray.light2}]`,
    ].join(' '),
    [RichLinkBadgeColors.Blue]: [
      `bg-[${palette.blue.dark3}]`,
      `[&_svg]:text-[${palette.blue.light2}]`,
      `[&_p]:text-[${palette.blue.light2}]`,
    ].join(' '),
    [RichLinkBadgeColors.Green]: [
      `bg-[${palette.green.dark3}]`,
      `[&_svg]:text-[${palette.green.light2}]`,
      `[&_p]:text-[${palette.green.light2}]`,
    ].join(' '),
    [RichLinkBadgeColors.Red]: [
      `bg-[${palette.red.dark3}]`,
      `[&_svg]:text-[${palette.red.light2}]`,
      `[&_p]:text-[${palette.red.light2}]`,
    ].join(' '),
    [RichLinkBadgeColors.Purple]: [
      `bg-[${palette.purple.dark3}]`,
      `[&_svg]:text-[${palette.purple.light2}]`,
      `[&_p]:text-[${palette.purple.light2}]`,
    ].join(' '),
    [RichLinkBadgeColors.Yellow]: [
      `bg-[${palette.yellow.dark3}]`,
      `[&_svg]:text-[${palette.yellow.light2}]`,
      `[&_p]:text-[${palette.yellow.light2}]`,
    ].join(' '),
  },
  [Theme.Light]: {
    [RichLinkBadgeColors.Gray]: [
      `bg-[${palette.gray.light2}]`,
      `[&_svg]:text-[${palette.gray.dark1}]`,
      `[&_p]:text-[${palette.black}]`,
    ].join(' '),
    [RichLinkBadgeColors.Blue]: [
      `bg-[${palette.blue.light3}]`,
      `[&_svg]:text-[${palette.blue.dark2}]`,
      `[&_p]:text-[${palette.blue.dark3}]`,
    ].join(' '),
    [RichLinkBadgeColors.Green]: [
      `bg-[${palette.green.light3}]`,
      `[&_svg]:text-[${palette.green.dark2}]`,
      `[&_p]:text-[${palette.green.dark3}]`,
    ].join(' '),
    [RichLinkBadgeColors.Red]: [
      `bg-[${palette.red.light3}]`,
      `[&_svg]:text-[${palette.red.dark2}]`,
      `[&_p]:text-[${palette.red.dark3}]`,
    ].join(' '),
    [RichLinkBadgeColors.Purple]: [
      `bg-[${palette.purple.light3}]`,
      `[&_svg]:text-[${palette.purple.dark2}]`,
      `[&_p]:text-[${palette.purple.dark3}]`,
    ].join(' '),
    [RichLinkBadgeColors.Yellow]: [
      `bg-[${palette.yellow.light3}]`,
      `[&_svg]:text-[${palette.yellow.dark2}]`,
      `[&_p]:text-[${palette.yellow.dark3}]`,
    ].join(' '),
  },
} as const;
