import { AxisQuantity, CalculationType, Machine } from './tub.data';

export enum SetTypes {
  umkLk, // УМК-ЛК
  umkTk, // УМК-ТК
}

export const SET_TYPES_MAP = {
  [SetTypes.umkLk]: 'УМК-ЛК',
  [SetTypes.umkTk]: 'УМК-ТК',
};

export type SetQuantity = Pick<Machine, 'weight' | 'type' | AxisQuantity.two | AxisQuantity.three | AxisQuantity.four>;
export type SetData = Machine;

// Таблица: крепление с помощью универсальных комплектов, данные
export const SET_DATA: SetData[] = [
  {
    weight: {
      from: 0,
      to: 2,
    },
    type: SetTypes.umkLk,
    calculationType: CalculationType.UMK,
    hasBrakes: true,
    [AxisQuantity.two]: 1,
    [AxisQuantity.three]: 1,
    [AxisQuantity.four]: 1,
  },
  {
    weight: {
      from: 2.1,
      to: 4,
    },
    type: SetTypes.umkLk,
    calculationType: CalculationType.UMK,
    hasBrakes: true,
    [AxisQuantity.two]: 1,
    [AxisQuantity.three]: 1,
    [AxisQuantity.four]: 1,
  },
  {
    weight: {
      from: 4.1,
      to: 5.5,
    },
    type: SetTypes.umkLk,
    calculationType: CalculationType.UMK,
    hasBrakes: true,
    [AxisQuantity.two]: 1,
    [AxisQuantity.three]: 1,
    [AxisQuantity.four]: 1,
  },
  {
    weight: {
      from: 5.6,
      to: 6.3,
    },
    type: SetTypes.umkLk,
    calculationType: CalculationType.UMK,
    hasBrakes: true,
    [AxisQuantity.two]: 1,
    [AxisQuantity.three]: 1,
    [AxisQuantity.four]: 1,
  },
  {
    weight: {
      from: 6.4,
      to: 12,
    },
    type: SetTypes.umkLk,
    calculationType: CalculationType.UMK,
    hasBrakes: true,
    [AxisQuantity.two]: 1,
    [AxisQuantity.three]: 1,
    [AxisQuantity.four]: 1,
  },
  {
    weight: {
      from: 12.1,
      to: 16.0,
    },
    type: SetTypes.umkTk,
    calculationType: CalculationType.UMK,
    hasBrakes: true,
    [AxisQuantity.two]: 1,
    [AxisQuantity.three]: 1,
    [AxisQuantity.four]: 1,
  },
  {
    weight: {
      from: 16.1,
      to: 18.0,
    },
    type: SetTypes.umkTk,
    calculationType: CalculationType.UMK,
    hasBrakes: true,
    [AxisQuantity.two]: 1,
    [AxisQuantity.three]: 1,
    [AxisQuantity.four]: 1,
  },
  {
    weight: {
      from: 18.1,
      to: 22.0,
    },
    type: SetTypes.umkTk,
    calculationType: CalculationType.UMK,
    hasBrakes: true,
    [AxisQuantity.two]: 1,
    [AxisQuantity.three]: 1,
    [AxisQuantity.four]: 1,
  },
  {
    weight: {
      from: 22.1,
      to: 24.0,
    },
    type: SetTypes.umkTk,
    calculationType: CalculationType.UMK,
    hasBrakes: true,
    [AxisQuantity.two]: 1,
    [AxisQuantity.three]: 1,
    [AxisQuantity.four]: 1,
  },
  {
    weight: {
      from: 24.1,
      to: 30.0,
    },
    hasBrakes: true,
    calculationType: CalculationType.SBR,
  },
  {
    weight: {
      from: 30.1,
      to: 40.0,
    },
    hasBrakes: true,
    calculationType: CalculationType.SBR,
  },
  {
    weight: {
      from: 0,
      to: 3.5,
    },
    hasBrakes: false,
    calculationType: CalculationType.SBR,
  },
  {
    weight: {
      from: 3.6,
      to: 7.0,
    },
    hasBrakes: false,
    calculationType: CalculationType.SBR,
  },
  {
    weight: {
      from: 7.1,
      to: 10,
    },
    hasBrakes: false,
    calculationType: CalculationType.SBR,
  },
];

// Таблица: количество колёсных машин
export const SET_QUANTITY_DATA: SetQuantity[] = [
  {
    weight: {
      from: 0,
      to: 2,
    },
    type: SetTypes.umkLk,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: {
      from: 2.1,
      to: 4,
    },
    type: SetTypes.umkLk,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: {
      from: 4.1,
      to: 5.5,
    },
    type: SetTypes.umkLk,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: {
      from: 5.6,
      to: 6.3,
    },
    type: SetTypes.umkLk,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: {
      from: 6.4,
      to: 12,
    },
    type: SetTypes.umkLk,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: {
      from: 12.1,
      to: 16,
    },
    type: SetTypes.umkTk,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: {
      from: 16.1,
      to: 18,
    },
    type: SetTypes.umkTk,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: {
      from: 18.1,
      to: 22,
    },
    type: SetTypes.umkTk,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: {
      from: 22.1,
      to: 24,
    },
    type: SetTypes.umkTk,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
];
