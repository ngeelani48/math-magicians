import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('check if the Home section renders properly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
