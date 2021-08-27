import { Heading } from '.';
import { screen } from '@testing-library/dom';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../styles/render-theme';
import { ThemeProvider } from 'styled-components';

describe('<Heading />', () => {
  it('should render with default values', () => {
    const { debug } = renderTheme(<Heading as="h1">Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xlarge,
      'text-transform': 'none',
    });
  });

  it('should render with white values', () => {
    renderTheme(<Heading colorDark={false}>Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Text' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Text' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Text' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    const { rerender } = renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.xlarge,
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
