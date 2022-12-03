import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { ListBox, ListBoxItem } from 'shared/ui/ListBox/ListBox';
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
  const countryOptions = useMemo<ListBoxItem<Country>[]>(() => {
    return [
      { value: Country.RUSSIA, content: t(Country.RUSSIA) },
      { value: Country.ARMENIA, content: t(Country.ARMENIA) },
      { value: Country.UZBEKISTAN, content: t(Country.UZBEKISTAN) },
      { value: Country.SWEDEN, content: t(Country.SWEDEN) },
    ];
  }, [t]);

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <ListBox
      value={value}
      label={t('Choose country')}
      items={countryOptions}
      onChange={onChangeHandler}
      readonly={readonly}
      className={getClassNames('', {}, [className])}
    />
  );
});
