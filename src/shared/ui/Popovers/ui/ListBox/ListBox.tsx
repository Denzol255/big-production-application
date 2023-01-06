import { Listbox as HListBox } from '@headlessui/react';
import { ReactNode } from 'react';
import CheckedListBoxIcon from 'shared/assets/icons/checkedListBoxIcon.svg';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button } from '../../../Button/Button';
import { Icon } from '../../../Icon/Icon';
import { HStack } from '../../../Stack';
import { DropDownOptionsDirectionsType } from '../styles/const';
import unionStyles from '../styles/styles.module.scss';
import styles from './ListBox.module.scss';

export interface ListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  items?: ListBoxItem<T>[];
  className?: string;
  value?: T;
  onChange?: <T extends string>(value: T) => void;
  defaultValue?: string;
  label?: string;
  readonly?: boolean;
  optionsDirection?: DropDownOptionsDirectionsType;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
  const {
    items,
    className,
    value,
    onChange,
    defaultValue,
    label,
    readonly,
    optionsDirection = 'bottom',
  } = props;

  return (
    <HStack>
      {label && (
        <span
          className={getClassNames(
            '',
            { [styles.labelReadonly]: readonly },
            []
          )}
        >
          {label}
        </span>
      )}
      <HListBox
        as='div'
        className={getClassNames(unionStyles.popup, {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button disabled={readonly} className={unionStyles.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options
          className={getClassNames(styles.options, {}, [
            unionStyles[optionsDirection],
          ])}
        >
          {items?.map((item) => (
            <HListBox.Option
              className={styles.optionItem}
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={getClassNames(
                    styles.liItem,
                    {
                      [unionStyles.active]: active,
                      [styles.disabled]: item.disabled,
                    },
                    []
                  )}
                >
                  <>{item.content}</>
                  {selected && (
                    <Icon
                      Svg={CheckedListBoxIcon}
                      className={styles.checkedIcon}
                    />
                  )}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
