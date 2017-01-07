import React from 'react';
import styled from 'styled-components';
import { Select } from 'antd';


const Title = styled.h1`
  font-size: 1.5em;
  color: darkgrey;
  margin-bottom: 20px;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: whitesmoke;
`;

const children = [];
// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }

function handleChange(value) {
  console.log(`selected ${value}`);
}

const HeaderTodo = () => (
  <Wrapper>
    <Title>ToDo App</Title>
    <div>Filter Tags:
    <Select
    multiple
    style={{ width: '100%', display: 'inline' }}
    placeholder="Please select"
    defaultValue={['a10', 'c12']}
    onChange={handleChange}
  >
    {children}
  </Select>
  </div>
  </Wrapper>
);

export default HeaderTodo;
