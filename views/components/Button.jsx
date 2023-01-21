const React = require("react");

class Button extends React.Component {
  render() {
    const { children } = this.props;
    return (
<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{children}</button>    
    );
  }
}

module.exports = Button;
