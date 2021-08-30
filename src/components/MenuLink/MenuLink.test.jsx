import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://www.google.com/">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a link', () => {
    renderTheme(
      <MenuLink link="https://www.google.com/" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should render a link', () => {
    const { container } = renderTheme(
      <MenuLink link="https://www.google.com/" newTab={false}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
