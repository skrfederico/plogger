const React = require("react");
const Header = require("./Header");

class LayoutFood extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
        <Header/>
        </head>
        <body className="w-screen h-screen bg-gray-400 flex flex-col align-center w-full">
          <main className="p-24">{children}</main>
        </body>
      </html>
    );
  }
}

module.exports = LayoutFood;
