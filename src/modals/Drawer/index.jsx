import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RuleIcon from "@mui/icons-material/Rule";
import ReviewsIcon from "@mui/icons-material/Reviews";

export const dashboardSideBar = [
    { text: "DASHBOARD", link: "/profile-dashboard" },
    { text: "ISSUES", link: "/profile-issues" },
    { text: "VITALS", link: "/profile-vitals" },
    { text: "REVIEWS", link: "/profile-reviews" },
];

export const ProviderDashboardSideBar = [
    { text: "DASHBOARD", link: "/provider-dashboard" },
    { text: "ISSUES", link: "/provider-issues" },
    { text: "VITALS", link: "/provider-vitals" },
    { text: "REVIEWS", link: "/provider-reviews" },
];

export const adminDashboardSideBar = [
    { text: "DASHBOARD", link: "/admin-dashboard" },
    { text: "EMPLOYEES", link: "/admin-employees" },
    { text: "ISSUES", link: "/profile-issues" },
    { text: "REVIEWS", link: "/admin-reviews" },
];

export const iconArray = [
    <DashboardIcon />,
    <RuleIcon />,
    <MonitorHeartIcon />,
    <ReviewsIcon />,
];