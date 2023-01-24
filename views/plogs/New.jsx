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
      </div> 
      <div>
      <div className="p-8 dark:bg-gray-800 rounded-lg">
      <form action="/plogs" method="POST">
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                <label for="checked-checkbox" class="inline-block align-middle text-lg font-medium text-gray-900 dark:text-white">Phonecall attained objective</label>
    <input checked id="checked-checkbox" type="checkbox" name="success" value="on" class="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>      
<p className="inline-block align-middle text-m font-medium text-gray-900 dark:text-white ">-No follow up required-</p>
    </div>
                    <div>
                        <label for="student" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student's name</label>
                        <input type="text" name="student" id="student" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type student's name" required="" />
                    </div>
                    <div>
                        <label for="teacher" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teacher's name</label>
                        <input type="text" name="teacher" id="teacher" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type teacher's name" required="" />
                    </div>
                    <div>
                        <label for="parent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parent's/Caregiver's name</label>
                        <input type="text" name="parent" id="parent" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type parent's/caregiver's name" required="" />
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
                <div class="flex items-stretch">

    <div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
    <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">This call has followed the <a href="https://confluence.cc.lehigh.edu/display/LKB/Telephone+Etiquette" class="text-blue-600 dark:text-blue-500 hover:underline">institution's etiquette</a>.</label>
</div>

                 <button type="submit" className="absolute right-32 text-right text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Add phone conversation log
                </button>
   

</div>
            </form>
      </div>
      </div>
      </Layout>
    );
  }
}

module.exports = New;


{/* <div class="mt-10 sm:mt-0">
<div class="md:grid md:grid-cols-3 md:gap-6">
  <div class="md:col-span-1">
    <div class="px-4 sm:px-0">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
      <p class="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
    </div>
  </div>
  <div class="mt-5 md:col-span-2 md:mt-0">
    <form action="#" method="POST">
      <div class="overflow-hidden shadow sm:rounded-md">
        <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
          <fieldset>
            <legend class="sr-only">By Email</legend>
            <div class="text-base font-medium text-gray-900" aria-hidden="true">By Email</div>
            <div class="mt-4 space-y-4">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"></input>
                </div>
                <div class="ml-3 text-sm">
                  <label for="comments" class="font-medium text-gray-700">Comments</label>
                  <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"></input>
                </div>
                <div class="ml-3 text-sm">
                  <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                  <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"></input>
                </div>
                <div class="ml-3 text-sm">
                  <label for="offers" class="font-medium text-gray-700">Offers</label>
                  <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend class="contents text-base font-medium text-gray-900">Push Notifications</legend>
            <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
            <div class="mt-4 space-y-4">
              <div class="flex items-center">
                <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"></input>
                <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">Everything</label>
              </div>
              <div class="flex items-center">
                <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"></input>
                <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700">Same as email</label>
              </div>
              <div class="flex items-center">
                <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"></input>
                <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700">No push notifications</label>
              </div>
            </div>
          </fieldset>
        </div>
        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
        </div>
      </div>
    </form>
  </div>
</div>
</div> */}