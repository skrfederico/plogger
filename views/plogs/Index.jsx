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
      <Heading>Phonecalls log index page</Heading>
  
        
          {this.props.plogs.map((plog, i) => {
            return (
              <div class="flex grid grid-cols-4 gap-4">
              <div  key={i}>
 
<div >
<h4 id="drawer-label" class="mb-1.5 leading-none text-xl font-semibold text-gray-900 dark:text-white">{plog.student}</h4>
        <p class="mb-5 text-xl font-bold text-gray-900 dark:text-white">{" on "}{plog.date}</p>
         </div>
    <dl>
        <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Description</dt>
        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{plog.description}</dd>
        <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Called by:</dt>
        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{plog.teacher}</dd>
    </dl>
    {/* <button type="button" class="text-white w-full inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
            Edit
        </button> 
        <button type="button" class="inline-flex w-full items-center text-white justify-center bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
            <svg aria-hidden="true" class="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            Delete
        </button> */}
        <Button><form action={`/plogs/${plog._id}/edit`} method="GET">
                  <input type="submit" value="UPDATE" />
                </form></Button>
                <Button>                
                <form
                  action={`/plogs/${plog._id}?_method=DELETE`}
                  method="POST">
                  <input type="submit" value="DELETE" />
                </form></Button>
              </div>
              </div>
            );
          })
          }
      </div>
      </Layout>
    );
  }
}

module.exports = Index;




