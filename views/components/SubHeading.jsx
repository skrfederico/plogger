const React = require("react");

class Heading extends React.Component {
  render() {
    const { children } = this.props;

    return <h1 className="text-right text-lg font-semibold text-gray-900 underline dark:text-grey decoration-sky-500">{children}</h1>;
  }
}

module.exports = Heading;


