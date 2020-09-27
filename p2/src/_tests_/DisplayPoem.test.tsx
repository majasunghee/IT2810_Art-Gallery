import React, {useEffect} from 'react';
import renderer from 'react-test-renderer';
import {DisplayPoem} from "../components/DisplayPoem";

const unmockedFetch = global.fetch

beforeAll(() => {
  global.fetch = () => Promise.resolve({ json: () => [] })
})

afterAll(() => {
  global.fetch = unmockedFetch
})


it('renders a poem', () => {
  const component = renderer.create(<DisplayPoem />).toJSON();
  expect(component).toMatchSnapshot();
});


describe('useEffect fetches', () => {
  test('works', () => {
    const json =  useEffect()
    expect(Array.isArray(json)).toEqual(true)
  })
})