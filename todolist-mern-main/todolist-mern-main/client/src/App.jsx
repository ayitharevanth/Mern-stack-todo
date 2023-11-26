import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash/Splash";
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"
import Home from "./pages/Home/Home";
import Notify from "./pages/Notify/Notify"
import Calendar from "./pages/Calendar/Calendar"
import Task from "./pages/Task/Task"
import UserSettings from "./pages/UserSettings/UserSettings"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="home" element={<Home />} />
        <Route path="notifications" element={<Notify />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="task" element={<Task />} />
        <Route path="settings" element={<UserSettings />} />
      </Routes>
    </BrowserRouter>
  );
}