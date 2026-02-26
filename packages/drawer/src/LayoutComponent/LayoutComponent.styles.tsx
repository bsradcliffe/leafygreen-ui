import { GRID_AREA } from '../constants';

export const contentStyles = [
  `[grid-area:${GRID_AREA.content}]`,
  'overflow-scroll',
  '[height:inherit]',
].join(' ');
