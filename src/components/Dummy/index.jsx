import P from 'prop-types';
import * as Styled from './styles';

export const Dummy = ({ children }) => {
  return (
    <Styled.Dummy>
      <h1>{children}</h1>
    </Styled.Dummy>
  );
};

Dummy.propTypes = {
  children: P.node.isRequired,
};
