import { cn } from '../cn';

export const getTabPanelStyles = (isSelected: boolean) =>
  cn(!isSelected && 'hidden');
