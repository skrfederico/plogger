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
       {/* <div className="bg-cyan-50 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
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
      </div> */}
      </div>
      <br></br>
      <br></br>
      <br></br>      
      <div>
      <form action="/plogs" method="POST">
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                        <label for="student" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student's name</label>
                        <input type="text" name="student" id="student" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type student's name" required="" />
                    </div>
                    <div>
                        <label for="teacher" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teacher's name</label>
                        <input type="text" name="teacher" id="teacher" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type teacher's name" required="" />
                    </div>
                    <div>
                        <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <input type="text" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="when did the conversation take place?" required="" />
                    </div>
                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reason</label>
                        <select id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Select category</option>
                            <option value="introduction">introduction</option>
                            <option value="information">information</option>
                            <option value="examNotice">exam notice</option>
                            <option value="misbehaviour">misbehaviour</option>
                        </select>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea id="description" name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write summary of the conversation here"></textarea>                    
                    </div>
                </div>
                 <button type="submit" className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Add phone conversation log
                </button>
            </form>
      </div>

      </Layout>
    );
  }
}

module.exports = New;
