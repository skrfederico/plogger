const React = require("react");
const Layout = require("../components/Layout");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");

class Edit extends React.Component{
  render() {
    const { title, body, _id, goodDay } = this.props
    return (
      <Layout>
      <Heading>{title} Edit page</Heading>
      <div className="shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
      <form action={`/plogs/${_id}?_method=PUT`} method="POST">
          <Text>
          Title: <input type="text" name="title" defaultValue={title}/><br/>
          Content: <input className="w-96" type="text" name="body"  defaultValue={body}/><br/>
          <Commented>Was it a good day:
              { goodDay? <input type="checkbox" name="goodDay" defaultChecked />: <input type="checkbox" name="goodDay"/> }
              </Commented>
          </Text>
          <br/>
          <Button><input type="submit" value="Submit Changes"/></Button>
      </form>
      </div>
      </Layout>
    )
  }
}
module.exports= Edit;