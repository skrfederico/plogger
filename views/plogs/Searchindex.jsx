const React = require("react");
const Layout = require("../components/Layout");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");

class Searchindex extends React.Component {
  render() {

//     const { plogs } = this.props;

// // Sort vlogs by date in descending order
// plogs.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
<Layout>
      <div className="grid">
            {/* <button className="logoutBtn">Logout</button></a></Button> */}
      <Heading>Plog Search index page</Heading>
      <Button> <div className="justify-items-end"><a href="/user/logout" className="logoutBtn">Logout</a></div></Button>
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
          <dl>
<dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">#:<a className="p-4 text-sky-300 text-right text-decoration: underline non-italic hover:italic font-semibold" href={`/plogs/${plog.id}`}> Plog {plogNumber} </a></dt>
        <div className="grid gap-4">
                <div><Button><form action={`/plogs/${plog._id}/edit`} method="GET">
                <input type="submit" value="UPDATE"/>
                </form></Button></div>                
                <div><Button><form
                action={`/plogs/${plog._id}?_method=DELETE`}
                method="POST">
                <input type="submit" value="DELETE" />
                </form></Button></div>
                </div>
              </dl>      
              </div>
              </div>
            );
          })
        }
                     <Button> <div className="justify-items-end"><a href="/plogs" className="backBtn">Back</a></div></Button>
        </div>
      </Layout>
    );
  }
}

module.exports = Searchindex;

