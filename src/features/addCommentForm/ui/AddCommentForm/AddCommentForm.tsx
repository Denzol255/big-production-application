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
  const commentText = useSelector(getAddCommentFormText);
  const commentError = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const handleCommentText = useCallback(
    (value: string): void => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    handleSendComment?.(commentText || '');
    handleCommentText('');
  }, [commentText, handleCommentText, handleSendComment]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={getClassNames(styles.addCommentForm, {}, [className])}>
        <Input
          className={styles.addCommentFormInput}
          theme={InputTheme.INVERTED_LABEL}
          placeholder={t('Your comment text')}
          inputName={t('Comment text')}
          value={commentText}
          onChange={handleCommentText}
        />
        <Button
          disabled={!commentText?.trim()}
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
