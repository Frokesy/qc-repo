import DashboardIcon from "../CustomIcons/DasboardIcon";
import ApprovalIcon from "../CustomIcons/ApprovalIcon";
import VisaIcon from "../CustomIcons/VisaIcon";
import BookingIcon from "../CustomIcons/BookingIcon";
import RequestsIcon from "../CustomIcons/RequestsIcon";
import PassportIcon from "../CustomIcons/PassportIcon";
import UsersIcon from "../CustomIcons/UsersIcon";

const adminNav = [
  {
    title: "Dashboard",
    to: "admin/admin-dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Approvals",
    to: "admin/approvals",
    icon: <ApprovalIcon />,
  },
  {
    title: "Requests",
    to: "admin/admin-requests",
    icon: <RequestsIcon />,
  },
  {
    title: "Visa",
    to: "admin/admin-visa",
    icon: <VisaIcon />,
  },
  {
    title: "Passport",
    to: "admin/admin-passport",
    icon: <PassportIcon />,
  },
  {
    title: "User Roles",
    to: "admin/user-roles",
    icon: <UsersIcon />,
  },
];

const supervisorNav = [
  {
    title: "Dashboard",
    to: "supervisor/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Approvals",
    to: "supervisor/supervisor-approvals",
    icon: <ApprovalIcon />,
  },
  {
    title: "Visa",
    to: "supervisor/supervisor-visa",
    icon: <VisaIcon />,
  },
];

const employeeNav = [
  {
    title: "Dashboard",
    to: "employee/employee-dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Bookings",
    to: "employee/employee-bookings",
    icon: <BookingIcon />,
  },
  {
    title: "Visa",
    to: "employee/employee-visa",
    icon: <VisaIcon />,
  },
];

const tsoNav = [
  {
    title: "Dashboard",
    to: "tso/tso-dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Requests",
    to: "tso/tso-requests",
    icon: <RequestsIcon />,
  },
  {
    title: "Visa",
    to: "tso/tso-visa",
    icon: <VisaIcon />,
  },
];

export { adminNav, supervisorNav, employeeNav, tsoNav };
