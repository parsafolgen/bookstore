import { Signup} from "./components/Signup";
import { Courses } from "./courses/Courses";
import { Home } from "./Home/Home";
import {Routes , Route, Navigate} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import { useAuth } from "./context/AuthProvider";
import { signup } from "../../back-end/controller/user.controller";


export default function App() {
  const [AuthUser , setAuthUser] = useAuth();

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={AuthUser?<Courses/>:<Navigate to="/signup"/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <Toaster />
    </>
  )
}