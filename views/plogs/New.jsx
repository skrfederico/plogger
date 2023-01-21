const React = require("react");
const Layout = require("../components/Layout");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");

class New extends React.Component {
  render() {
    return (
      <Layout>
      <div>
        <Heading>New Plog page</Heading>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
       <div className="bg-cyan-50 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
        <form action="/plogs" method="POST">
          <Text>
          Title: <input type="text" name="title" />
          <br />
          Content: <input className="w-96" type="text" name="body" />
          <br />
          <Commented>
          Was it a good day?: <input type="checkbox" name="goodDay"/>
          </Commented>
          <br />
          </Text>
          <Button><input type="submit" name="" value="Create Plog" /></Button>
        </form>
      </div>
      </div>
      </Layout>
    );
  }
}

module.exports = New;
