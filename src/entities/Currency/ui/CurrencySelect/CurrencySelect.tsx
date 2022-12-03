import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox, ListBoxItem } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
  const { t } = useTranslation();
  const { value, onChange, readonly, className } = props;
  const currencyOptions = useMemo<ListBoxItem<Currency>[]>(() => {
    return [
      { value: Currency.RUB, content: '₽ (RUB)' },
      { value: Currency.EUR, content: '€ (EUR)' },
      { value: Currency.SEK, content: 'kr (SEK)' },
      { value: Currency.USD, content: '$ (USD)' },
    ];
  }, []);

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <ListBox
      className={className}
      value={value}
      label={t('Choose currency')}
      items={currencyOptions}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
