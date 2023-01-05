import { Profile } from 'entities/Profile';
import { ValidateProfileErrors } from '../const/editableProfileCardConst';

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  formData?: Profile;
  validateErrors?: ValidateProfileErrors[];
}
