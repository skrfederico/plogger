const React = require("react");

class Text extends React.Component {
  render() {
    const { children } = this.props;

    return <h1 className="text-xl leading-8">{children}</h1>;
  }
}

module.exports = Text;
