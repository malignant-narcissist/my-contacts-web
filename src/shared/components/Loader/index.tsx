import { AppPortal } from '../AppPortal';
import * as styles from './styles';
import { FunctionComponent } from 'preact';

type Props = {
  visible: boolean;
};

const Loader: FunctionComponent<Props> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <AppPortal containerId='loader-container'>
      <styles.Container>
        <styles.LoaderKeyframes />
      </styles.Container>
    </AppPortal>
  );
};

export { Loader };
