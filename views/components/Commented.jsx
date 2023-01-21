const React = require("react");

class Commented extends React.Component {
  render() {
    const { children } = this.props;

    return <h1 className="text-l font-light italic leading-8">{children}</h1>;
  }
}

module.exports = Commented;