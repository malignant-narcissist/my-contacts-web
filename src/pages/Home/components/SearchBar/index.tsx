import { Container, ControlledInput } from './styles';
import React, { HTMLAttributes } from 'preact/compat';

type Props = Pick<HTMLAttributes<HTMLInputElement>, 'value' | 'onSearch'>;
const SearchBar: React.FC<Props> = (props) => {
  return (
    <Container>
      <ControlledInput
        type='search'
        name='filterName'
        placeholder='Pesquisar contato...'
        {...props}
      />
    </Container>
  );
};

export { SearchBar };
