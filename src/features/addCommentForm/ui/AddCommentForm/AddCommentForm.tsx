import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFromSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import styles from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  handleSendComment?: (value: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, handleSendComment } = props;
  const { t } = useTranslation();
  const addCommentText = useSelector(getAddCommentFormText);
  const addCommentError = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const handleCommentText = useCallback(
    (value: string): void => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    handleSendComment?.(addCommentText || '');
    handleCommentText('');
  }, [addCommentText, handleCommentText, handleSendComment]);

  if (addCommentError) {
    return (
      <div className={getClassNames(styles.addCommentForm, {}, [className])}>
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title={t('Cannot get add comment form')}
          text={t('Try to reload the page')}
        />
      </div>
    );
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={getClassNames(styles.addCommentForm, {}, [className])}>
        <Input
          className={styles.addCommentFormInput}
          theme={InputTheme.INVERTED_LABEL}
          placeholder={t('Your comment text')}
          inputName={t('Comment text')}
          value={addCommentText}
          onChange={handleCommentText}
        />
        <Button
          disabled={!addCommentText?.trim()}
          className={styles.addCommentFormSendBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >
          {t('Send')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
