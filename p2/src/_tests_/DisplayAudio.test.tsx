import React from 'react';
import renderer from 'react-test-renderer';
import {DisplayAudio} from "../components/DisplayAudio";

it('renders correctly when there are no items', () => {
  const component = renderer.create(<DisplayAudio />).toJSON();
  expect(component).toMatchSnapshot();
});
