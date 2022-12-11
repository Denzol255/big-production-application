import { Profile } from 'entities/Profile';
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema';

export const validateProfile = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }
  const { first, lastname, age } = profile;
  const errors: ValidateProfileErrors[] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!age && !Number.isInteger(age)) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  return errors;
};
