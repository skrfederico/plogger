const React = require("react");
const Layout = require("../components/Layout");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");
const Plog = require("../../models/plogs");


class Show extends React.Component {
  render() {
    const  plog  = this.props;
// console.log(plog._id)
    // const query = Plog.find({});

    // Alternative syntax
    // const {log} = this.props

    return (
      <Layout>
        <Heading> {plog.student} phonecall Show Page </Heading>

        <div class="border-solid border-2 border-sky-500 grid grid-cols-4 gap-4">
     <div>
<h4 id="drawer-label" class="mb-1.5 leading-none text-xl font-semibold text-gray-900 dark:text-white">{plog.student}</h4>
<p class="mb-5 text-xl font-bold text-gray-900 dark:text-white">{" on "}{plog.date}</p>
</div>
    <dl>
        <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Description</dt>
        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{plog.description}</dd>
    </dl>
        <div>    <dl>
        <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Called by:</dt>
        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{plog.teacher}</dd>
    </dl>
    </div>
        <div><Button><form action={`/plogs/${plog._id}/edit`} method="GET">
                <input type="submit" value="UPDATE"/>
                </form></Button><Button><form
                action={`/plogs/${plog._id}?_method=DELETE`}
                method="POST">
                <input type="submit" value="DELETE" />
                </form></Button></div>
              </div>



              
                
        
     
     
     
     
      </Layout>
    );
  }
}
module.exports = Show;