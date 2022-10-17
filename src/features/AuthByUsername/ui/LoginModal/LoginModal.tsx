import { FC, Suspense } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Loader, LoaderTheme } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}
      className={getClassNames(styles.loginModal, {}, [className])}
    >
      <Suspense fallback={<Loader theme={LoaderTheme.WHITE} />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
