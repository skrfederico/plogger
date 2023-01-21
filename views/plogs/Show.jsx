const React = require("react");
const Layout = require("../components/Layout");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");
const Plog = require("../../models/plogs");


class Show extends React.Component {
  render() {
    const log = this.props;
console.log(log._id)
    // const query = Plog.find({});

    // Alternative syntax
    // const {log} = this.props

    return (
      <Layout>
        <Heading> {log.title} Show Page </Heading>
        <div className="shadow-[inset_-12px_-8px_40px_#46464620]">
        <Text>
          {log.body}
          </Text>
           <Commented>
           {log.goodDay
            ? "It was a good day"
            : "It was not a good day..."} </Commented>
            <Commented>
            {"-"} {String(log.createdAt)}      
            </Commented>
       
        <Button><form action={`/plogs/${log._id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE"/>
  </form></Button>
  
                <Button><form action='/plogs' method="GET">
                  <input type="submit" value="BACK" />
                </form></Button>
                </div>
      </Layout>
    );
  }
}
module.exports = Show;