const React = require("react");
const Header = require("./Header");

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
        <Header/>
        </head>
        <body className="w-screen h-screen bg-gray-300 flex flex-col align-center w-full">
          <main className="p-12">{children}</main>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
