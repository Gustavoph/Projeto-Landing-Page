import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Veritatis tempora, doloribus cum ullam, cumque obcaecati natus mollitia
    debitis quisquam ipsum quae delectus! Ullam blanditiis magnam doloribus.
    Dicta excepturi minus eveniet!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{}}>
      <TextComponent {...args} />
    </div>
  );
};
