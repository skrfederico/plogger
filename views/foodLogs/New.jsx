const React = require("react");
const LayoutFood = require("../components/LayoutFood");
const Heading = require("../components/Heading");
const Commented = require("../components/Commented");

class New extends React.Component {
  render() {
    return (
      <LayoutFood>
      <div>
        <Heading>New Food Log page</Heading>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <div className="bg-cyan-50 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
        <form action="/foodlog" method="POST">
          Main: <input type="text" name="main" />
          <br />
          Side: <input type="text" name="side" />
          <br />
          <Commented>
          Were there seconds?: <input type="checkbox" name="seconds"/>         
          <br />
          Were there leftovers?: <input type="checkbox" name="leftovers"/>
          <br />
          </Commented>
          <input type="submit" name="" value="Create Food Log" />
        </form>
      </div>
      </div>
      </LayoutFood>
    );
  }
}

module.exports = New;
