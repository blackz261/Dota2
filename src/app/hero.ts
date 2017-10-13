export enum Prime { STRENGTH, AGILITY, INTELLIGENCE};
export enum Status { Radiant, Dire};

export class Hero {
  id: number;
  name: string;
  type: Prime;
  status: Status; //the radiant (true) vs the dire
}