import { Theme } from '@leafygreen-ui/lib';

export const rootStyles = 'max-w-[648px] text-center';

export const featuresContainerStyles = 'flex gap-[24px] justify-center';

export const featureContainerStyles = 'w-[200px] max-w-[200px]';

export const titleStyles = 'mb-[24px]';

export const graphicWrapperStyles = 'mb-[16px]';

export const featureDescriptionStyles: Record<Theme, string> = {
  [Theme.Dark]: 'text-[#C1C7C6]',
  [Theme.Light]: 'text-[#5C6C75]',
};

export const buttonContainerStyles = 'flex justify-center gap-[12px] mt-[24px]';

export const externalLinkStyles = 'mt-[24px]';
