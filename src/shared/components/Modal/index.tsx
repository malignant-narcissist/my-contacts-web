import { AppPortal } from '../AppPortal';
import * as styles from './styles';
import { FunctionComponent } from 'preact';

type Props = {
  visible: boolean;
};

const Modal: FunctionComponent<Props> = ({ children, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <AppPortal containerId='modal-container'>
      <styles.Container>{children}</styles.Container>
    </AppPortal>
  );
};

export { Modal };
