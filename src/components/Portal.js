const React = require("react");
const ReactDOM = require("react-dom");

const styles = require("./Portal.scss");

class Portal extends React.Component {
  // constructor(props) {
  //   super(props);
    
  // }
  // componentDidMount() {
    
  // }
  render() {
    this.elem = document.querySelector(".year");
    console.log(this.elem)
    return ReactDOM.createPortal(<div>Some text</div>, this.elem);
  }
}

module.exports = Portal;
