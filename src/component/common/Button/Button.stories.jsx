import Button from '.';

export default {
  title: 'Component/Common/Button',
  component: Button,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = args => <Button {...args} />;

const DefaultButton = Template.bind({});

DefaultButton.args = {
  children: '장바구니',
  type: 'button',
};

export { DefaultButton };
