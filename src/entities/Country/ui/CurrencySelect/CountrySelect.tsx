import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

export const CountrySelect: FC<CountrySelectProps> = memo((props) => {
  const { t } = useTranslation();
  const { value, onChange, readonly, className } = props;
  const countryOptions = useMemo<SelectOption[]>(() => {
    return [
      { value: Country.RUSSIA, text: t(Country.RUSSIA) },
      { value: Country.ARMENIA, text: t(Country.ARMENIA) },
      { value: Country.UZBEKISTAN, text: t(Country.UZBEKISTAN) },
      { value: Country.SWEDEN, text: t(Country.SWEDEN) },
    ];
  }, [t]);

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <Select
      value={value}
      label={t('Choose country')}
      options={countryOptions}
      onChange={onChangeHandler}
      readonly={readonly}
      className={getClassNames('', {}, [className])}
    />
  );
});
