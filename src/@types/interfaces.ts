export interface ITeam {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: string;
}

export interface IContact {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}

export interface IInvoice {
  id: number;
  name: string;
  email: string;
  cost: string;
  phone: string;
  date: string;
}

export interface ITransaction {
  txId: string;
  user: string;
  date: string;
  cost: string;
}

export interface IBar {
  country: string;
  "hot dog": number;
  "hot dogColor": string;
  burger: number;
  burgerColor: string;
  kebab: number;
  kebabColor: string;
  donut: number;
  donutColor: string;
}

export interface IPie {
  id: string;
  label: string;
  value: number;
  color: string;
}

export interface ILine {
  id: string;
  color: string;
  data: ILineData[];
}

interface ILineData {
  x: string;
  y: number;
}

export interface IGeography {
  id: string;
  value: number;
}
interface Coordinates {
  [index: number]: [number, number];
}

interface Geometry {
  type: string;
  coordinates: Coordinates[] | Coordinates[][];
}

interface Properties {
  name: string;
}

interface IGeoFeatures {
  type: string;
  properties: Properties;
  geometry: Geometry;
  id: string;
}

export interface IGeo {
  type: string,
  features: IGeoFeatures[]
}