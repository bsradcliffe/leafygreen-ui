import {
  descriptionClassName,
  inputOptionContentClassName,
  leftGlyphClassName,
  titleClassName,
} from '@leafygreen-ui/input-option';
import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { color, spacing } from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import { MenuVariant } from '../Menu/Menu.types';
import { menuColor } from '../styles';
import { getLgIds } from '../utils';

import { Variant } from './MenuItem.types';
const lgIds = getLgIds();

export const menuItemClassName = createUniqueClassName(lgIds.item);

export const menuItemContainerStyles = 'w-full p-0 list-none';

interface MenuItemStyleArgs {
  active: boolean;
  disabled: boolean;
  highlighted: boolean;
  theme: Theme;
  variant: Variant;
  menuVariant: MenuVariant;
}

const DEFAULT_MENU_ITEM_PADDING = spacing[200]; // 8
const COMPACT_MENU_ITEM_PADDING = spacing[150]; // 6

export const getMenuItemStyles = ({
  active,
  disabled,
  highlighted,
  theme,
  variant,
  menuVariant,
}: MenuItemStyleArgs) => {
  const padding =
    menuVariant === MenuVariant.Default
      ? DEFAULT_MENU_ITEM_PADDING
      : COMPACT_MENU_ITEM_PADDING;

  return cn(
    // Base styles
    'block',
    'w-full',
    `min-h-[${spacing[800]}px]`,
    `bg-[${menuColor[theme].background.default}]`,
    `[padding:${padding}px_${spacing[300]}px]`,
    `[&_.${titleClassName}]:text-[${menuColor[theme].text.default}]`,
    `[&_.${leftGlyphClassName}]:text-[${menuColor[theme].icon.default}]`,

    // Active
    active &&
      cn(
        `bg-[${menuColor[theme].background.active}]`,
        `hover:bg-[${menuColor[theme].background.active}]`,
        `[&::before]:scale-y-100`,
        `[&::before]:[translate:0_-50%]`,
        `[&::before]:bg-[${menuColor[theme].border.active}]`,
        `hover:[&::before]:scale-y-100`,
        `hover:[&::before]:[translate:0_-50%]`,
        `hover:[&::before]:bg-[${menuColor[theme].border.active}]`,
        `[&_.${titleClassName}]:text-[${menuColor[theme].text.active}]`,
        `[&_.${titleClassName}]:font-bold`,
        `hover:[&_.${titleClassName}]:text-[${menuColor[theme].text.active}]`,
        `hover:[&_.${titleClassName}]:font-bold`,
        `[&_.${leftGlyphClassName}]:text-[${menuColor[theme].icon.active}]`,
        `hover:[&_.${leftGlyphClassName}]:text-[${menuColor[theme].icon.active}]`,
      ),

    // Highlighted
    highlighted &&
      cn(
        `bg-[${menuColor[theme].background.focus}]`,
        `hover:bg-[${menuColor[theme].background.focus}]`,
        `focus-visible:bg-[${menuColor[theme].background.focus}]`,
        `[&::before]:scale-y-100`,
        `[&::before]:[translate:0_-50%]`,
        `[&::before]:bg-[${menuColor[theme].border.focus}]`,
        `hover:[&::before]:scale-y-100`,
        `hover:[&::before]:[translate:0_-50%]`,
        `hover:[&::before]:bg-[${menuColor[theme].border.focus}]`,
        `focus-visible:[&::before]:scale-y-100`,
        `focus-visible:[&::before]:[translate:0_-50%]`,
        `focus-visible:[&::before]:bg-[${menuColor[theme].border.focus}]`,
        `[&_.${titleClassName}]:text-[${menuColor[theme].text.focus}]`,
        `hover:[&_.${titleClassName}]:text-[${menuColor[theme].text.focus}]`,
        `focus-visible:[&_.${titleClassName}]:text-[${menuColor[theme].text.focus}]`,
        `[&_.${leftGlyphClassName}]:text-[${menuColor[theme].icon.focus}]`,
        `hover:[&_.${leftGlyphClassName}]:text-[${menuColor[theme].icon.focus}]`,
        `focus-visible:[&_.${leftGlyphClassName}]:text-[${menuColor[theme].icon.focus}]`,
      ),

    // Destructive
    variant === Variant.Destructive &&
      cn(
        `[&_.${titleClassName}]:text-[${color[theme].text.error.default}]`,
        `[&_.${leftGlyphClassName}]:text-[${color[theme].icon.error.default}]`,
        `hover:bg-[${color[theme].background.error.hover}]`,
        `hover:[&_.${titleClassName}]:text-[${color[theme].text.error.hover}]`,
        `hover:[&_.${leftGlyphClassName}]:text-[${color[theme].icon.error.hover}]`,
      ),

    // Disabled
    disabled &&
      cn(
        `bg-[${menuColor[theme].background.default}]`,
        `hover:bg-[${menuColor[theme].background.default}]`,
        `[&_.${titleClassName}]:text-[${color[theme].text.disabled.default}]`,
        `hover:[&_.${titleClassName}]:text-[${color[theme].text.disabled.default}]`,
        `[&_.${leftGlyphClassName}]:text-[${color[theme].icon.disabled.default}]`,
        `hover:[&_.${leftGlyphClassName}]:text-[${color[theme].icon.disabled.default}]`,
      ),
  );
};

export const getMenuItemContentStyles = ({
  hasGlyph,
}: {
  hasGlyph: boolean;
}) => cn(!hasGlyph && `[padding-inline-start:${spacing[300]}px]`);

interface NestedItemStyleArgs {
  theme: Theme;
  submenuDepth: number;
  groupDepth: number;
  submenuHasIcon: boolean;
  groupHasIcon: boolean;
}

/** Styling for nested items */
export const getNestedMenuItemStyles = ({
  theme,
  submenuDepth,
  submenuHasIcon,
  groupDepth,
  groupHasIcon,
}: NestedItemStyleArgs) => {
  const baseSubmenuInset = submenuHasIcon ? spacing[900] : spacing[300]; // item start should be aligned with the label of the submenu
  const submenuInset = submenuDepth * baseSubmenuInset;
  const baseGroupInset = groupHasIcon ? spacing[600] : 0; // item start should align with the group label (with icon)
  const groupInset = groupDepth * baseGroupInset;
  const totalInset = submenuInset + groupInset;

  return cn(
    // The inset border for submenu items
    submenuDepth > 0 &&
      cn(
        `[&::after]:content-['']`,
        `[&::after]:absolute`,
        `[&::after]:top-0`,
        `[&::after]:right-0`,
        `[&::after]:left-[${totalInset}px]`,
        `[&::after]:h-px`,
        `[&::after]:bg-[${menuColor[theme].border.default}]`,
      ),
    `[&_.${inputOptionContentClassName}]:relative`,
    `[&_.${inputOptionContentClassName}]:pl-[${totalInset}px]`,
    `[&_.${inputOptionContentClassName}]:[border-top:1px_solid_transparent]`,
  );
};

// TODO: Remove dark-in-light mode styles
// after https://jira.mongodb.org/browse/LG-3974
export const getDarkInLightModeMenuItemStyles = ({
  active,
  variant,
  disabled,
  highlighted,
}: MenuItemStyleArgs) => {
  return cn(
    `bg-[${color.dark.background.primary.default}]`,
    `[&_.${titleClassName}]:text-[${color.dark.text.primary.default}]`,
    `[&_.${descriptionClassName}]:text-[${color.dark.text.secondary.default}]`,
    `[&_.${leftGlyphClassName}]:text-[${color.dark.icon.primary.default}]`,
    `hover:bg-[${color.dark.background.primary.hover}]`,
    `hover:[&_.${titleClassName}]:text-[${color.dark.text.primary.hover}]`,
    `hover:[&_.${descriptionClassName}]:text-[${color.dark.text.secondary.hover}]`,
    `hover:[&_.${leftGlyphClassName}]:text-[${color.dark.icon.primary.hover}]`,

    // Active styles
    active &&
      cn(
        `bg-[${color.dark.background.primary.default}]`,
        `hover:bg-[${color.dark.background.primary.default}]`,
        `[&_.${titleClassName}]:text-[${palette.green.base}]`,
        `hover:[&_.${titleClassName}]:text-[${palette.green.base}]`,
        `[&_.${leftGlyphClassName}]:text-[${palette.green.base}]`,
        `hover:[&_.${leftGlyphClassName}]:text-[${palette.green.base}]`,
        `[&::before]:bg-[${palette.green.base}]`,
        `hover:[&::before]:bg-[${palette.green.base}]`,
      ),

    // Highlighted
    highlighted &&
      cn(
        `bg-[${color.dark.background.primary.focus}]`,
        `hover:bg-[${color.dark.background.primary.focus}]`,
        `focus-visible:bg-[${color.dark.background.primary.focus}]`,
        `[&_.${titleClassName}]:text-[${color.dark.text.primary.focus}]`,
        `hover:[&_.${titleClassName}]:text-[${color.dark.text.primary.focus}]`,
        `focus-visible:[&_.${titleClassName}]:text-[${color.dark.text.primary.focus}]`,
        `[&_.${descriptionClassName}]:text-[${color.dark.text.secondary.focus}]`,
        `hover:[&_.${descriptionClassName}]:text-[${color.dark.text.secondary.focus}]`,
        `focus-visible:[&_.${descriptionClassName}]:text-[${color.dark.text.secondary.focus}]`,
        `[&_.${leftGlyphClassName}]:text-[${color.dark.icon.primary.focus}]`,
        `hover:[&_.${leftGlyphClassName}]:text-[${color.dark.icon.primary.focus}]`,
        `focus-visible:[&_.${leftGlyphClassName}]:text-[${color.dark.icon.primary.focus}]`,
      ),

    // Destructive
    variant === Variant.Destructive &&
      cn(
        `[&_.${titleClassName}]:text-[${color.dark.text.error.default}]`,
        `[&_.${leftGlyphClassName}]:text-[${color.dark.icon.error.default}]`,
        `hover:bg-[${color.dark.background.error.hover}]`,
        `hover:[&_.${titleClassName}]:text-[${color.dark.text.error.hover}]`,
        `hover:[&_.${leftGlyphClassName}]:text-[${color.dark.icon.error.hover}]`,
      ),

    // Disabled
    disabled &&
      cn(
        `bg-[${color.dark.background.primary.default}]`,
        `hover:bg-[${color.dark.background.primary.default}]`,
        `[&_.${titleClassName}]:text-[${color.dark.text.disabled.default}]`,
        `hover:[&_.${titleClassName}]:text-[${color.dark.text.disabled.default}]`,
        `[&_.${descriptionClassName}]:text-[${color.dark.text.disabled.default}]`,
        `hover:[&_.${descriptionClassName}]:text-[${color.dark.text.disabled.default}]`,
        `[&_.${leftGlyphClassName}]:text-[${color.dark.icon.disabled.default}]`,
        `hover:[&_.${leftGlyphClassName}]:text-[${color.dark.icon.disabled.default}]`,
      ),
  );
};
