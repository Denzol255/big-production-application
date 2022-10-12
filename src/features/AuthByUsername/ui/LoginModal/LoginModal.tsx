import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

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
      <LoginForm />
    </Modal>
  );
};
