// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Customer from "views/Customer/Customer.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Inicio",
    icon: "home",
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/customer",
    name: "Cliente",
    icon: Person,
    component: Customer,
    layout: "/admin"
  },
  {
      path: "/user",
      name: "Usuario",
      icon: "assignment_ind",
      component: UserProfile,
      layout: "/admin"
  },
  {
    path: "/cashcount",
    name: "Cierre Diario",
    icon: "info_outline",
    component: Customer,
    layout: "/admin"
  },
  {
    path: "/cashcount",
    name: "Salir del Sistema",
    icon: "settings_power",
    component: Customer,
    layout: "/admin"
  }
  
];

export default dashboardRoutes;
