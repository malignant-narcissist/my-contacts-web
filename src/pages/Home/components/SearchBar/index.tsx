import * as styles from './styles';
import React, { HTMLAttributes } from 'preact/compat';

type Props = Pick<HTMLAttributes<HTMLInputElement>, 'value' | 'onSearch'>;

const SearchBar: React.FC<Props> = (props) => {
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
