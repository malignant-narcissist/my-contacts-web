import { EventManager } from './EventManager.ts';

type ToastData = {
  type?: 'default' | 'error' | 'success';
  text: string;
  iconSource?: string;
};

type ToastFunction = (data: ToastData) => void;

const toastEventManager = new EventManager<'ADD_TOAST'>();

const toast: ToastFunction = ({ type = 'default', ...rest }) => {
  toastEventManager.emit('ADD_TOAST', {
    type,
    ...rest,
  });
};

export { toast, toastEventManager };

export type { ToastData };
