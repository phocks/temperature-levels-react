const React = require('react');
const renderer = require('react-test-renderer');

const Age = require('../Age');

describe('Age', () => {
  test('It renders', () => {
    const component = renderer.create(<Age />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
