const React = require("react");

class Heading extends React.Component {
  render() {
    const { children } = this.props;

    return <h1 className="text-red text-2xl p-8">{children}</h1>;
  }
}

module.exports = Heading;
