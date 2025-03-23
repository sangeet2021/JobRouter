import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
// Pages
import Home from "./components/Home";
import About from "./components/About";
import Careers, { careerLoaders } from "./components/Careers";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import CareersDesc, { careerDetailsLoader } from "./components/CareersDesc";
// Layouts
import CareerLayout from "./layouts/CareerLayout";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="careers" element={<CareerLayout />}>
        <Route index element={<Careers />} loader={careerLoaders} />
        <Route
          path=":id"
          element={<CareersDesc />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
