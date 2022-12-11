import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface Profile {
  id?: string;
  age?: number;
  avatar?: string;
  city?: string;
  country?: Country;
  currency?: Currency;
  first?: string;
  lastname?: string;
  username?: string;
}
