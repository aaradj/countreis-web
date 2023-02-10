//components
import Store from "./Components/Store";
import Countery from "./Pages/Countery";
export interface IRoutes {
  name: string;
  component: React.FunctionComponent;
  path?: string;
  _id: number;
  authorize: Array<"user" | "manager">;
}

const routes: IRoutes[] = [
  {
    name: "countereis",
    component: Store,
    path: "/",
    _id: 1,
    authorize: ["user", "manager"],
  },
  {
    name: "countery",
    component: Countery,
    path: "/:name",
    _id: 2,
    authorize: ["user", "manager"],
  },
];

export default routes;
