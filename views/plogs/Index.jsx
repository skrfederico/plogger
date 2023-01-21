const React = require("react");
const Layout = require("../components/Layout");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");

//const iconUrl = `someConstantText.${myObject.icon.suffix}`;
//const example = `https://img.pokemondb.net/artwork/large/.${plog.title}.jpg`

class Index extends React.Component {
  render() {
    const { plogs } = this.props;
    //const example = `https://img.pokemondb.net/artwork/large/.${plog.title}.jpg`

    return (
      <Layout>
      <div>
      <Heading>Captain's Logs index page</Heading>
  
        
          {this.props.plogs.map((plog, i) => {
            return (
              <li key={i}>
                <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <a className="text-decoration: underline italic hover:not-italic font-semibold" href={`/plogs/${plog.id}`}> Plog: {plog.title} </a> <Text> {" - "}
                {plog.body}
                {" "}
                <Commented>
                {plog.goodDay
                  ? `It was a good day`
                  : `It was not a good day`}</Commented></Text>
                  {/* <div> <img src={example}/> </div> */}
                  
                <Button><form action={`/plogs/${plog._id}/edit`} method="GET">
                  <input type="submit" value="UPDATE" />
                </form></Button>
                <Button>                
                <form
                  action={`/plogs/${plog._id}?_method=DELETE`}
                  method="POST">
                  <input type="submit" value="DELETE" />
                </form></Button>
                <br></br>
                <br></br>
                </div>
              </li>
            );
          })
          
          }
  
      </div>
      </Layout>
    );
  }
}

module.exports = Index;