const React = require("react")
const Layout = require("../components/Layout");

class Signup extends React.Component{
  render(){
    return(
      <Layout>
      <section>
    <div class="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-3xl font-extrabold text-center text-neutral-600">Welcome new user!</h2>
            <h2 class="mt-6 text-3xl font-extrabold text-center text-neutral-600">Sign up</h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="px-4 py-8 sm:px-10">
                <form class="space-y-6" action="/user/signup" method="POST">
                    <div>
                        <label for="username" class="block text-sm font-medium text-gray-700"> Username </label>
                        <div class="mt-1">
                            <input id="username" name="username" type="text" autocomplete="username" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" required></input>
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
                        <div class="mt-1">
                            <input id="password" name="password" type="password" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" required></input>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"></input>
                            <label for="remember-me" class="block ml-2 text-sm text-neutral-600"> Remember me </label>
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" name="" value="Login">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
      
      
      
      
      {/* <div>
        <h1>Sign up</h1>
        
        <form action="/user/signup" method="POST">
        Name:<input type="text" defaultValue="" name="username" required/>
          Password:{" "}
          <input type="password" defaultValue="" name="password" required/>
<input type="submit" name="" value="Signup"/>
        </form>
      </div> */}
      </Layout>
    )
  }
}

module.exports = Signup