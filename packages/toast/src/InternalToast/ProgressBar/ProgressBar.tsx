import React from 'react';
import clamp from 'lodash/clamp';

import { Theme } from '@leafygreen-ui/lib';

import { cn } from '../../cn';

import {
  progressBarBackgroundStyle,
  progressBarBackgroundThemeStyle,
  progressBarStyle,
  progressBarThemeStyle,
} from './ProgressBar.styles';

interface ProgressBarProps {
  progress: number;
  theme: Theme;
}

/**
 * The progress bar for `variant = 'progress'` toasts
 *
 * @internal
 */
function ToastProgressBar({ progress, theme }: ProgressBarProps) {
  const normalizedProgress = clamp(progress, 0, 1) * 100;

  return (
    <div
      className={cn(
        progressBarBackgroundStyle,
        progressBarBackgroundThemeStyle[theme],
      )}
      role="progressbar"
      aria-valuenow={normalizedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn(
          progressBarStyle,
          progressBarThemeStyle[theme],
        )}
        style={{ width: `${normalizedProgress}%` }}
      />
    </div>
  );
}

ToastProgressBar.displayName = 'ToastProgressBar';

export default ToastProgressBar;
