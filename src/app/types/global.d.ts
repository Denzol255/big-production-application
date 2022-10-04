/* eslint-disable @typescript-eslint/naming-convention */
declare module '*.module.css';
declare module '*.module.scss';
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module '*.woff';
declare module '*.woff2';
// and so on for whatever flavor of css you're using

declare const __IS_DEV__: boolean;
