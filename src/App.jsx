import './App.css'
import SignupForm from './Components/Authentication/SignUp/SignUpForm'
import Login from './Components/Authentication/Login/Login'

function App() {

  return (
    <>
      <div className="App">
      {/* <SignupForm/> */}
      <Login/>
    </div>
    </>
  )
}

export default App


// <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Layout />}>
//             <Route path='/add' element={<SignupForm />}></Route>
//             <Route index element={<SignupForm />}></Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>