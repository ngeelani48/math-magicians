import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('check if the Calculator renders properly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
