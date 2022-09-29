import { FC } from 'react';
import { TailSpin } from 'react-loader-spinner';

// interface LoaderProps {
//   height: string;
//   width: string;
//   color?: string;
//   ariaLabel?: string;
//   radius?: string;
//   wrapperStyle: CSSProperties;
//   wrapperClass?: string;
//   visible: boolean;
// }

export const Loader: FC = () => {
  return (
    <TailSpin
      height='80'
      width='80'
      color='#faa508'
      ariaLabel='tail-spin-loading'
      radius='1'
      wrapperStyle={{}}
      wrapperClass=''
      visible={true}
    />
  );
};
