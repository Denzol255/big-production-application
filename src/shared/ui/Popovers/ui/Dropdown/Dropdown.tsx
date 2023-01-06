import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { AppLink } from '../../../AppLink/AppLink';
import { DropDownOptionsDirectionsType } from '../styles/const';
import unionStyles from '../styles/styles.module.scss';
import styles from './Dropdown.module.scss';

export interface DropDownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropDownProps {
  className?: string;
  items: DropDownItem[];
  trigger: ReactNode;
  optionsDirection?: DropDownOptionsDirectionsType;
}

export function Dropdown(props: DropDownProps) {
  const { trigger, items, className, optionsDirection = 'bottom' } = props;

  return (
    <Menu
      as='div'
      className={getClassNames(unionStyles.popup, {}, [className])}
    >
      <Menu.Button className={unionStyles.trigger}>{trigger}</Menu.Button>
      <Menu.Items
        className={getClassNames(styles.menuItems, {}, [
          unionStyles[optionsDirection],
        ])}
      >
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              disabled={item.disabled}
              onClick={item.onClick}
              type='button'
              className={getClassNames(
                styles.item,
                {
                  [unionStyles.active]: active,
                  [styles.disabled]: item.disabled,
                },
                []
              )}
            >
              {item.content}
            </button>
          );
          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                key={index}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item as={Fragment} key={index} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
