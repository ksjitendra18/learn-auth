import { Link } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";

const Signup = () => {
  const handleSignup = async (
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    e.preventDefault();

    console.log(e.target);

    const form = e.target as HTMLFormElement;
    const formValues = new FormData(form);

    console.log("formData", formValues.get("namee"));
  };

  return (
    <div>
      <main className="p-4 md:p-9">
        <h2 className="text-4xl font-medium mt-10 text-center">Sign up</h2>
        <div className="auth-options w-full flex flex-col items-center justify-center">
          <GoogleLogin message="Sign up with Google" />
          <div className="mt-5 mb-3 w-full md:w-[380px] flex items-center justify-center">
            <div className="before-or w-[100%] h-[2px] bg-gray-300 mr-2"></div>
            <p className="text-gray-500 or">OR</p>
            <div className="after-or w-[100%] h-[2px] bg-gray-300 ml-2"></div>
          </div>
          <form onClick={handleSignup} className="w-[100%] mx-auto md:w-auto">
            <label htmlFor="name" className="mt-5 block text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="namee"
              className="border-slate-400 px-3 w-full md:w-[400px] py-2 rounded-md border-2 "
            />
            <label htmlFor="email" className="mt-5 block text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-slate-400 px-3 w-full md:w-[400px] py-2 rounded-md border-2 "
            />
            <label htmlFor="password" className="mt-5 block text-gray-600">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                id="password"
                className="border-slate-400 px-3 w-full md:w-[400px] py-2 rounded-md border-2 "
              />
              <button type="button" aria-label="Password Invisible.">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 select-none text-gray-700 cursor-pointer h-6 absolute top-2 right-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-slate-800 mt-5 w-full px-10 py-2  border-2 border-solid border-mainbg rounded-md text-white hover:scale-95 duration-100 ease-in "
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="mt-5 text-left">
            Already have an account?
            <Link to="/login" className="font-medium">
              Log in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
