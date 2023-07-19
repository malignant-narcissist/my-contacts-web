import { ToastData, toastEventManager } from '../../utils/toast.ts';
import { ToastBase, ToastListContainer } from './styles.ts';
import { useSignal, useSignalEffect } from '@preact/signals';
import { FunctionComponent } from 'preact';

import CheckCircleIcon from './assets/check-circle.svg';
import XCircleIcon from './assets/x-circle.svg';

const ICON_SOURCES = {
  success: CheckCircleIcon,
  error: XCircleIcon,
} as const;

type Message = {
  id: string;
  onClick: (id: string) => unknown;
} & Omit<ToastData, 'iconSource'>;

const Toast: FunctionComponent = () => {
  const messages = useSignal<Message[]>([]);

  useSignalEffect(() => {
    const removeToast = (id: string) => {
      messages.value = messages.value.filter((message) => message.id !== id);
    };

    const addToast = (data: Omit<ToastData, 'iconSource'>) => {
      const message = {
        id: Math.random().toString(),
        onClick: removeToast,
        ...data,
      };

      messages.value = [...messages.value, message];

      setTimeout(() => {
        removeToast(message.id);
      }, message.timespan);
    };

    toastEventManager.on('ADD_TOAST', addToast);

    return () => {
      toastEventManager.removeListener('ADD_TOAST', addToast);
    };
  });

  return (
    <ToastListContainer>
      {messages.value.map(({ id, text, type = 'default', onClick }) => {
        return (
          <ToastBase.Root onClick={() => onClick(id)} type={type} key={id}>
            {type !== 'default' ? (
              <img alt='icon' src={ICON_SOURCES[type]} />
            ) : null}
            <ToastBase.Text>{text}</ToastBase.Text>
          </ToastBase.Root>
        );
      })}
    </ToastListContainer>
  );
};

export { Toast };
