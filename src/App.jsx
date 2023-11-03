import NavbarPage from "./components/NavbarPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage"
import ContactsPage from "./views/ContactsPage"

const App = () => {
  return (
    <>
      <NavbarPage/>
      <Routes>
      <Route
        path="/"
        element={<HomePage/>}
        />
        <Route
        path="/Home"
        element={<HomePage/>}
        />
        <Route
        path="/ContactsPage"
        element={<ContactsPage/>}
        />
      </Routes>
    </>
    
  );
};
export default App;
