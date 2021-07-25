import SallaryDashboard from "./Home";
import AboutPage from "./About";

const routesConfig = [
  {
    path: "/",
    component: SallaryDashboard,
    exact: true,
  },
  {
    path: "/about",
    component: AboutPage,
    exact: true,
  },
];

export default routesConfig;
