const React = require("react");
const Layout = require("../components/Layout");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");

class Index extends React.Component {
  render() {

    const { plogs } = this.props;
    console.log()
    return (
<Layout>
      <div>
      <a href="/user/logout">
            <button className="logoutBtn">Logout</button></a>
      <Heading>Phonecalls log index page</Heading>
          {this.props.plogs.map((plog, i) => {
            console.log(plog.success)
              let plogNumber = i + 1; // increment log number by 1
          return (              
            <div class="p-4 border-solid border-2 border-sky-100 dark:bg-gray-800 rounded-lg" key={i}>
              <div class="grid grid-cols-4 gap-4">

<div>
<h4 id="drawer-label" class="mb-1.5 leading-none text-xl font-semibold text-gray-900 dark:text-white">{plog.student}</h4>
<div>    <dl>
        <p class="mb-5 text-xl font-bold text-gray-900 dark:text-white">{" on "}{plog.date}</p>
    </dl>
<dl><Commented>
                {plog.success
                  ? <div class="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full" role="alert">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  Success!
                </div>
                  : <div class="bg-red-200 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
                  </svg>
                  Follow up
                </div>}</Commented></dl>
    </div>


</div>
    <dl>
        <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Description</dt>
        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{plog.description}</dd>
    </dl>
    <dl>
        <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Called by:</dt>
        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{plog.teacher}</dd>
    </dl>        

        
        <div className="row-auto">
        {/* <div>  Plog #{logNumber} </div> */}
<div>        <a className="p-4 text-white text-right text-decoration: underline italic hover:not-italic font-semibold" href={`/plogs/${plog.id}`}> Plog: {plogNumber} </a> {" - "}</div>
          <Button><form action={`/plogs/${plog._id}/edit`} method="GET">
                <input type="submit" value="UPDATE"/>
                </form></Button>                
                <Button><form
                action={`/plogs/${plog._id}?_method=DELETE`}
                method="POST">
                <input type="submit" value="DELETE" />
                </form></Button></div>
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

    {/* <button type="button" class="text-white w-full inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
            Edit
        </button> 
        <button type="button" class="inline-flex w-full items-center text-white justify-center bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
            <svg aria-hidden="true" class="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            Delete
        </button> */}



