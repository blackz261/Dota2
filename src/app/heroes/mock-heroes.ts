import { Hero, Prime, Status } from '../hero';

export const listHeroes: Hero[] = [
  { id: 1, name: 'EARTHSHAKER', type: Prime.STRENGTH, status: Status.Radiant},
  { id: 2, name: 'SVEN', type: Prime.STRENGTH, status: Status.Radiant},
  { id: 3, name: 'TINY', type: Prime.STRENGTH, status: Status.Radiant},
  { id: 4, name: 'KUNKKA', type: Prime.STRENGTH, status: Status.Radiant},

  { id: 5, name: 'ANTI-MAGE', type: Prime.AGILITY, status: Status.Radiant},
  { id: 6, name: 'DROW RANGER', type: Prime.AGILITY, status: Status.Radiant},
  { id: 7, name: 'JUGGERNAUT', type: Prime.AGILITY, status: Status.Radiant},
  { id: 8, name: 'MIRANA', type: Prime.AGILITY, status: Status.Radiant},

  { id: 9, name: 'CRYSTAL MAIDEN', type: Prime.INTELLIGENCE, status: Status.Radiant},
  { id: 10, name: 'PUCK', type: Prime.INTELLIGENCE, status: Status.Radiant},
  { id: 11, name: 'STORM SPIRIT', type: Prime.INTELLIGENCE, status: Status.Radiant},
  { id: 12, name: 'WINDRANGER', type: Prime.INTELLIGENCE, status: Status.Radiant},

  { id: 13, name: 'AXE', type: Prime.STRENGTH, status: Status.Dire},
  { id: 14, name: 'PUDGE', type: Prime.STRENGTH, status: Status.Dire},
  { id: 15, name: 'SAND KING', type: Prime.STRENGTH, status: Status.Dire},
  { id: 16, name: 'SLARDAR', type: Prime.STRENGTH, status: Status.Dire},

  { id: 17, name: 'BLOODSEEKER', type: Prime.AGILITY, status: Status.Dire},
  { id: 18, name: 'SHADOW FIEND', type: Prime.AGILITY, status: Status.Dire},
  { id: 19, name: 'RAZOR', type: Prime.AGILITY, status: Status.Dire},
  { id: 20, name: 'VENOMANCER', type: Prime.AGILITY, status: Status.Dire},

  { id: 21, name: 'BANE', type: Prime.INTELLIGENCE, status: Status.Dire},
  { id: 22, name: 'LICK', type: Prime.INTELLIGENCE, status: Status.Dire},
  { id: 23, name: 'LION', type: Prime.INTELLIGENCE, status: Status.Dire},
  { id: 24, name: 'WITCH DOCTOR', type: Prime.INTELLIGENCE, status: Status.Dire},
];