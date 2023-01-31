const React = require("react");
const Layout = require("../components/Layout");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");

class Edit extends React.Component{
  render() {
    const { student, teacher, date, category, description, _id, success, parent } = this.props.plog
    return (
      <Layout>
      <Heading>{student}{' - '}{teacher}{' - '}{date}  Edit page</Heading>
      
      <div className="p-8 dark:bg-gray-800 rounded-lg">
      <form action={`/plogs/${_id}?_method=PUT`} method="POST">
                
    
                
                            
                <div className="grid gap-4 mb-4 sm:grid-cols-2 dark:bg-gray-800">
                {/* <div className="p-8 dark:bg-gray-800">
     */}
                <div>
                <label for="checked-checkbox" class="inline-block align-middle text-lg font-medium text-gray-900 dark:text-white">Phonecall attained objective</label>
    <input checked id="checked-checkbox" type="checkbox" name="success" value="on" defaultValue={success} class="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>      
<p className="inline-block align-middle text-m font-medium text-gray-900 dark:text-white ">-No follow up required-</p>
    </div>
                    <div>
                        <label for="student" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student's name</label>
                        <input type="text" name="student" id="name" defaultValue={student} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" /*placeholder="Ex. Apple iMac 27&ldquo;"*/ />
                    </div>
                    <div>
                        <label for="parent" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parent's name</label>
                        <input type="text" name="parent" id="parent" defaultValue={parent} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" /*placeholder="Ex. Apple iMac 27&ldquo;"*/ />
                    </div>
                    <div>
                        <label for="teacher" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teacher's name</label>
                        <input type="text" name="teacher" id="teacher" defaultValue={teacher} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" /*placeholder="Ex. Apple"*/ />
                    </div>
                    <div>
                        <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <input type="date" defaultValue={date} name="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" /*placeholder="$299"*/ />
                    </div>
                    <div>
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reason</label>
                        <select id="category" name="category" defaultValue={category} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            {/* <option selected="">Reason</option> */}
                            <option value="introduction">introduction</option>
                            <option value="information">information</option>
                            <option value="examNotice">exam notice</option>
                            <option value="misbehaviour">misbehaviour</option>
                        </select>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea id="description" name="description" defaultValue={description} rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>                    
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <button type="submit" class="text-white bg-primary-700 hover:text-black border border-primary-600 hover:bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Update phone log
                    </button>
                    <button type="button" class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                        <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        Delete
                    </button>
                </div>
            </form>
      </div>
      
      
      
      <br></br>
      <br></br>
      <br></br>
      {/* <div className="shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
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
      </div> */}
      </Layout>
    )
  }
}
module.exports= Edit;