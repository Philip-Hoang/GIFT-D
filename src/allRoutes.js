import { lazy } from "react";

const allRoutes = [
  {
    path: "/",
    exact: true,
    roles: true,
    component: lazy(() => import("./Components/GiveGifts/GiveGifts")),
  },
  {
    path: "/GIFT-D",
    exact: true,
    roles: true,
    component: lazy(() => import("./Components/UnderConstruction")),
  },
  {
    path: "/aboutus",
    exact: true,
    roles: true,
    component: lazy(() => import("./Components/UnderConstruction")),
  },
  {
    path: "/reviews",
    exact: true,
    roles: true,
    component: lazy(() => import("./Components/UnderConstruction")),
  },
  {
    path: "/signup",
    exact: true,
    roles: true,
    component: lazy(() => import("./Components/UnderConstruction")),
  },
];
export default allRoutes;
