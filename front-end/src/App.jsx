import { Signup} from "./components/Signup";
import { Courses } from "./courses/Courses";
import { Home } from "./Home/Home";
import {Routes , Route} from "react-router-dom"


export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Courses/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </>
  )
}