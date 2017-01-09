import React, { PropTypes } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';

const FormItem = Form.Item;

class AddTask extends React.Component {
  state = {
    input: '',
  };

  handleInput = e => this.setState({ input: e.target.value });

  handleSubmit = (e) => {
    const { dispatch, onAdd } = this.props;
    const { input } = this.state;
    e.preventDefault();
    dispatch(onAdd({ title: input, todoId: this.props.todoId }));
    this.setState({ input: '' });
  }

  render() {
    const { input } = this.state;
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormItem>
          <Input value={input} onChange={this.handleInput} placeholder="task's title" size="small" />
        </FormItem>
        <FormItem>
          <Button onClick={this.handleSubmit} icon="plus" size="small" />
        </FormItem>
      </Form>
    );
  }
}

AddTask.propTypes = {
  todoId: PropTypes.number,
  dispatch: PropTypes.func,
  onAdd: PropTypes.func,
};

export default AddTask;
