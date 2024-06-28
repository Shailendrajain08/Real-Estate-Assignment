import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../../features/user/UserThunks";

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { loading, error} = useSelector((state) => state.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    }


    return (
        <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-3xl p-8 mb-46 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Registration Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <div>
            <button
              type="submit"
              disabled={loading}
              className="w-6/12 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-800 disabled:opacity-50"
            >
              {loading ? "Loging In..." : "Login"}
            </button>
            <button
              type="button"
              disabled={loading}
              className="w-6/12 py-2 text-white bg-red-600 rounded-md hover:bg-red-800 disabled:opacity-50"
            >
                Sign Up
            </button>
            </div>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </form>
          </div>
          </div>
        </>
    )
}

export default Login