import { Popover as HPopover } from '@headlessui/react';
import { ReactNode, memo } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { DropDownOptionsDirectionsType } from '../styles/const';
import unionStyles from '../styles/styles.module.scss';
import styles from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  optionsDirection?: DropDownOptionsDirectionsType;
  children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
  const { className, trigger, optionsDirection = 'bottom', children } = props;
  return (
    <HPopover
      className={getClassNames(styles.popover, {}, [
        className,
        unionStyles.popup,
      ])}
    >
      <HPopover.Button className={unionStyles.trigger}>
        {trigger}
      </HPopover.Button>
      <HPopover.Panel
        className={getClassNames(styles.panel, {}, [
          unionStyles[optionsDirection],
        ])}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
