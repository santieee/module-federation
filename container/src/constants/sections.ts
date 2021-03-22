import {lazy} from 'react';

export interface ISection {
  name: string,
  path: string,
  component: any
}

const sections: Array<ISection> = [
  {
    name: "Индивидуальные лимиты",
    path: "/individual-limits",
    component: lazy((): any => import("individual_limit/App"))
  },
  {
    name: "Лимиты концентраций и полномочий",
    path: "/concentrat-limits",
    component: lazy((): any => import("concentration_limit/App"))
  },
];

export default sections;