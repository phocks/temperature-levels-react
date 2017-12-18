const React = require('react');
const styles = require('./InlineText.scss');

class InlineText extends React.Component {
  render() {
    return (
      <span className={styles.wrapper}>
        {this.props.text}
      </span>
    );
  }
}

module.exports = InlineText;