import React, { PropTypes } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';

const FormItem = Form.Item;

class AddTodo extends React.Component {
  state = {
    input: '',
  };

  handleInput = e => this.setState({ input: e.target.value });

  handleSubmit = (e) => {
    const { dispatch, onAdd } = this.props;
    const { input } = this.state;
    e.preventDefault();
    dispatch(onAdd(input));
    this.setState({ input: '' });
  }

  render() {
    const { input } = this.state;
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormItem>
          <Input value={input} onChange={this.handleInput} placeholder="todo's title" required />
        </FormItem>
        <FormItem>
          <Button size="large" type="primary" htmlType="submit" icon="plus" />
        </FormItem>
      </Form>
    );
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func,
  onAdd: PropTypes.func,
};

export default AddTodo;
