import { employeeNav, tsoNav, adminNav, supervisorNav } from "./navItem";
export const getNavItems = (path) => {
  if (path === "admin") {
    return adminNav;
  }
  if (path === "tso") {
    return tsoNav;
  }
  if (path === "employee") {
    return employeeNav;
  }
  if (path === "supervisor") {
    return supervisorNav;
  }
};

export const getCurrentLocation = (path) => {
  const currentParent = path?.split("/");
  return currentParent[2];
};

// export const capitalizeWord = (word) => {
//   const arr = word?.split("_");
//   const newArr = arr?.map((word) => {
//     const chr0 = word.substring(0, 1).toUpperCase();
//     const chr1 = word.substring(1);

//     return chr0 + chr1;
//   });

//   return newArr?.join(" ");
// };
