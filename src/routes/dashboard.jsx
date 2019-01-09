// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import CreditCard from "@material-ui/icons/CreditCard";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import ChartLine from "@material-ui/icons/Timer";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import SystemAdmin from "views/UserProfile/SystemAdmin.jsx";
import Business from "views/UserProfile/business.jsx";
import Card from "views/UserProfile/card.jsx";
// import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "HR Admin Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/card",
    sidebarName: "Recharge Cards",
    navbarName: "Profile",
    icon: CreditCard,
    component: Card
  },
  {
    path: "/transactions",
    sidebarName: "Transactions",
    navbarName: "Transactions",
    icon: LibraryBooks,
    component: TableList
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
