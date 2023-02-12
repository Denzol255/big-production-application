import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface useModalProps {
  animationDelayShow?: number;
  animationDelayHide?: number;
  onClose?: () => void;
  isOpen?: boolean;
}

export const useModal = (props: useModalProps) => {
  const {
    animationDelayShow = 100,
    animationDelayHide = 100,
    onClose,
    isOpen,
  } = props;
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const [showContent, setShowContent] = useState<boolean>(false);
  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
        setIsMounted(false);
      }, animationDelayHide);
    }
  }, [animationDelayHide, onClose]);

  const onKeyPressHandler = useCallback(
    (e: MyKeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      timerRef.current = setTimeout(() => {
        setShowContent(true);
      }, animationDelayShow);
    }
  }, [animationDelayShow, isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyPressHandler);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyPressHandler);
      setShowContent(false);
    };
  }, [isOpen, onKeyPressHandler]);

  return {
    isClosing,
    isMounted,
    showContent,
    close,
  };
};
