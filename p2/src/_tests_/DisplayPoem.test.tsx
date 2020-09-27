import React, {useEffect} from 'react';
import renderer from 'react-test-renderer';
import {DisplayPoem} from "../components/DisplayPoem";

it('renders a poem', () => {
  const component = renderer.create(<DisplayPoem />).toJSON();
  expect(component).toMatchSnapshot();
});
