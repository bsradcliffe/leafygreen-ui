import React from 'react';

import { cn } from '../cn';

import { footerStyle } from './Footer.styles';
import { FooterProps } from './Footer.types';

/**
 * @internal
 * Internal modal Footer component
 */
const Footer = ({ children, className }: FooterProps) => {
  return <div className={cn(footerStyle, className)}>{children}</div>;
};

Footer.displayName = 'Footer';

export default Footer;
