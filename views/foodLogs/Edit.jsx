const React = require('react');
const LayoutFood = require("../components/LayoutFood");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require('../components/Button');

class Edit extends React.Component{
  render() {
    const { main, _id, seconds, leftovers, side } = this.props
        return (
      <LayoutFood>
      <Heading>{main} Food Log Edit page</Heading>
      <div className="shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
      <form action={`/foodlog/${_id}?_method=PUT`} method="POST">
        <Text>
          Main: <input type="text" name="main" defaultValue={main}/><br/>
          Side: <input type="text" name="side"  defaultValue={side}/><br/>
          <Commented>Did sailors have seconds?:
              { seconds? <input type="checkbox" name="seconds" defaultChecked />: <input type="checkbox" name="seconds"/> }
          <br/>
          Were there leftovers?:
              { leftovers? <input type="checkbox" name="leftovers" defaultChecked />: <input type="checkbox" name="leftovers"/> }
              </Commented>
              </Text>
          <br/>
          <Button><input type="submit" value="Submit Changes"/></Button>
      </form>
      </div>
      </LayoutFood>
    )
  }
}
module.exports= Edit;