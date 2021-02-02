import {RawMaterials} from "./RawMaterials";

export interface Point {
  id : number;
  x : string;
  y : string;
}

export interface Village{
  id : String;
  name : String;
  point: Point;
  rawMaterials: RawMaterials;
  user : any;
}
