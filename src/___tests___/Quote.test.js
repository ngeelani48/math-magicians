import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../components/Quote';

it('check if the Quote section renders properly', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
