const React = require('react');
const renderer = require('react-test-renderer');

const InlineText = require('../InlineText');

describe('InlineText', () => {
  test('It renders', () => {
    const component = renderer.create(<InlineText />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
