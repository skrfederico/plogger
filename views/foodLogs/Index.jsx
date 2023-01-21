const React = require("react");
const LayoutFood = require("../components/LayoutFood");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");

class Index extends React.Component {
  render() {
    const foodLogs = this.props;
    //const example = `https://img.pokemondb.net/artwork/large/.${foodLog.title}.jpg`

    return (
      <LayoutFood>
      {/* <div> */}
        <nav className="flex flex-row align-center justify-between p-4 bg-blue-900">
     <a href="/foodlog">
       <div>Food Logs</div>
     </a>
     <a className="mr-1" href="/foodlog/new">
       <div>New Food Log</div>
     </a>
     <a className="mr-3" href="https://www.linkedin.com/in/federico-skrzypicki//">
        <div>Chef</div>
     </a>
   </nav>
   <Heading>Captain's Food Logs index page</Heading>
       {this.props.foodLogs.map((foodLog, i) => {
              return (
              <ul key={i}>
                   <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <a className="text-decoration: underline" href={`/foodlog/${foodLog.id}`}>{foodLog.main} {" with "}
                {foodLog.side} </a>
                {" * "}
                {foodLog.seconds
                  ? `There were seconds for hungry boys`
                  : `Just one plate for everyone`}
{" - "}
                {foodLog.leftovers
                  ? `Meal wasn't good... lots of leftovers`
                  : `Great noms! They even licked the dishes`}                
                <br></br>
                <Button><form
                  action={`/foodlog/${foodLog._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form></Button>
                <Button><form action={`/foodlog/${foodLog._id}/edit`} method="GET">
                  <input type="submit" value="UPDATE" />
                </form></Button>
                </div>
                <br></br>
              </ul>
            );
          })
          
          }
  
      {/* </div> */}
      </LayoutFood>
    );
  }
}

module.exports = Index;