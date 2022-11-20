import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
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
  const currencyOptions = useMemo<SelectOption<Currency>[]>(() => {
    return [
      { value: Currency.RUB, text: '₽(RUB)' },
      { value: Currency.EUR, text: '€(EUR)' },
      { value: Currency.SEK, text: 'kr(SEK)' },
      { value: Currency.USD, text: '$(USD)' },
    ];
  }, []);

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <Select
      value={value}
      label={t('Choose currency')}
      options={currencyOptions}
      onChange={onChangeHandler}
      readonly={readonly}
      className={getClassNames('', {}, [className])}
    />
  );
});
