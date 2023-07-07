import * as styles from './styles';
import { FunctionComponent } from 'preact';
import { HTMLAttributes } from 'preact/compat';

type Props = Pick<HTMLAttributes<HTMLInputElement>, 'value' | 'onSearch'>;

const SearchBar: FunctionComponent<Props> = (props) => {
  return (
    <styles.Container>
      <styles.ControlledInput
        type='search'
        name='filterName'
        placeholder='Pesquisar contato...'
        {...props}
      />
    </styles.Container>
  );
};

export { SearchBar };
