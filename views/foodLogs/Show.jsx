const React = require("react");
const LayoutFood = require("../components/LayoutFood");
const Heading = require("../components/Heading");
const SubHeading = require("../components/SubHeading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");
const Log = require("../../models/foodLogs");


class Show extends React.Component {
  render() {
    const foodLog = this.props;
    console.log(foodLog._id)
      // const query = FoodLog.find({});

    // Alternative syntax
    // const {foodLog} = this.props

    return (
      <LayoutFood>
        <Heading> {foodLog.main} w/ {foodLog.side} show page </Heading>
        <SubHeading>{" from "}  {String(foodLog.createdAt)}</SubHeading>
        <br></br>
        <br></br>

        <div className="shadow-[inset_-12px_-8px_40px_#46464620]">
        <Text>{"Today sailors had "} {foodLog.main} {" with a side of "} {foodLog.side} </Text> 
        <Commented>{" - "}{foodLog.seconds
            ? "There were seconds for hungry boys"
            : "They almost ate the cook after finishing their only plate"}
            <br></br> {" - "}{foodLog.leftovers
            ? "This meal wasn't a hit, there were leftovers to use as bait"
            : "They ate everything... even licked their plates!"} </Commented>        
        <br></br>
        <Button><form action={`/foodlog/${foodLog._id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE"/>
  </form></Button>
  
                <Button><form action='/foodlog' method="GET">
                  <input type="submit" value="BACK" />
                </form></Button>
                </div>
      {/* <Heading>{title}</Heading>
        <Heading>{body}</Heading> */}
      </LayoutFood>
    );
  }
}
module.exports = Show;