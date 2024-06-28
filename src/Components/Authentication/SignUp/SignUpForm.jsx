import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignupUser } from "../../../features/user/UserThunks";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError2, setPasswordError2] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.user);
  const role = "user"

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setNameError("Please Fill Your Name");
    }
    if (userName === "") {
      setUserNameError("Please Create Your User Name");
    }
    if (email === "") {
      setEmailError("Please Fill Your Email");
    }
    if (password === "") {
      setPasswordError2("Please Fill Your Password");
    }
    if (confirmPassword === "") {
      setConfirmPassError("Please Fill Confirm Password");
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");
    dispatch(SignupUser({ name, userName, email, password, role }));
  };

  useEffect(() => {
    if (userInfo) {
      setName("");
      setUserName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  }, [userInfo]);

  return (
    <>
      {/* <nav className="bg-indigo-600 fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <a href="#" className="text-white text-xl font-bold">Real Estate</a>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-3xl p-8 mb-46 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 pl-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Ex: Ram, Shyam ..."
              />
            </div>
            {nameError && <p className="text-sm text-red-600">{nameError}</p>}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                User Name:
              </label>
              <input
                type="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 pl-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Ex: User01, user_08 ..."
              />
            </div>
            {userNameError && <p className="text-sm text-red-600">{userNameError}</p>}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 pl-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Ex: abc@email.com ..."
              />
            </div>
            {emailError && <p className="text-sm text-red-600">{emailError}</p>}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Ex: Abcd123@ ..."
              />
            </div>
            {passwordError2 && <p className="text-sm text-red-600">{passwordError2}</p>}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password:
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Ex: Abcd123@ ..."
              />
            </div>
            {confirmPassError && <p className="text-sm text-red-600">{confirmPassError}</p>}
            {passwordError && (
              <p className="text-sm text-red-600">{passwordError}</p>
            )}
            <div>
            <button
              type="submit"
              disabled={loading}
              className="w-6/12 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-800 disabled:opacity-50"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
            <button
              type="button"
              disabled={loading}
              className="w-6/12 py-2 text-white bg-red-600 rounded-md hover:bg-red-800 disabled:opacity-50"
            >
              Login
            </button>
            </div>
            
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
