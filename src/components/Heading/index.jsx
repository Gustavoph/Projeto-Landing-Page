import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'big',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      size={size}
      as={as}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  children: P.node.isRequired,
  colorDark: P.bool,
  uppercase: P.bool,
};
