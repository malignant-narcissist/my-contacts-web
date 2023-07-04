import { VNode } from 'preact';
import { createPortal } from 'preact/compat';

type Props = {
  containerId: string;
};

const AppPortal: (data: { children: VNode } & Props) => VNode = ({
  children,
  containerId,
}) => {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    document.body.appendChild(container);
  }

  return createPortal(children, container);
};

export { AppPortal };
