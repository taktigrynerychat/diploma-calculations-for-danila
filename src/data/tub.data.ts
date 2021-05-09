export enum CalculationType { // тип расчета
  UMK,
  TUB,
  SBR,
}

export enum AxisQuantity { // количество осей
  two = 2,
  three,
  four,
}

export enum TubMaterialTypes { // типы материалов
  nailsWithCount, // гвозди 6мм, штуки
  nailsWithWeight, // гвозди 6мм, кг
  typicalThrustBar, // типовой упорный брусок
  typicalSideBar// типовой боковой брусок
}

export const TUB_MATERIAL_TYPES = [
  TubMaterialTypes.nailsWithCount,
  TubMaterialTypes.nailsWithWeight,
  TubMaterialTypes.typicalThrustBar,
  TubMaterialTypes.typicalSideBar,
];

export const TUB_MATERIAL_TYPE_MAP = {
  [TubMaterialTypes.nailsWithCount]: 'гвозди 6мм, штуки',
  [TubMaterialTypes.nailsWithWeight]: 'гвозди 6мм, кг',
  [TubMaterialTypes.typicalThrustBar]: 'типовой упорный брусок',
  [TubMaterialTypes.typicalSideBar]: 'типовой боковой брусок',
}

export const AXIS_TYPES = [AxisQuantity.two, AxisQuantity.three, AxisQuantity.four];

export interface Machine {
  hasBrakes: boolean;
  weight: { from: number; to: number };
  calculationType: CalculationType;
  name?: string;
  type?:number;
  [AxisQuantity.two]?: number;
  [AxisQuantity.three]?: number;
  [AxisQuantity.four]?: number;
}

export interface TubMachineData {
  weight: { from: number; to: number };
  materials: { [key in TubMaterialTypes]: { [key in AxisQuantity]: number } }
}

// Таблицы "РАСЧЕТЫ ТУБ"
export const TUB_MATERIALS_DATA: TubMachineData[] = [
  {
    weight: {
      from: 0,
      to: 2,
    },
    materials: {
      [TubMaterialTypes.nailsWithCount]: {
        [AxisQuantity.two]: 40,
        [AxisQuantity.three]: 40,
        [AxisQuantity.four]: 40,
      },
      [TubMaterialTypes.nailsWithWeight]: {
        [AxisQuantity.two]: 1.8,
        [AxisQuantity.three]: 1.8,
        [AxisQuantity.four]: 1.8,
      },
      [TubMaterialTypes.typicalThrustBar]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 4,
        [AxisQuantity.four]: 4,
      },
      [TubMaterialTypes.typicalSideBar]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 4,
        [AxisQuantity.four]: 4,
      },
    },
  },
  {
    weight: {
      from: 2.1,
      to: 4,
    },
    materials: {
      [TubMaterialTypes.nailsWithCount]: {
        [AxisQuantity.two]: 40,
        [AxisQuantity.three]: 40,
        [AxisQuantity.four]: 40,
      },
      [TubMaterialTypes.nailsWithWeight]: {
        [AxisQuantity.two]: 1.8,
        [AxisQuantity.three]: 1.8,
        [AxisQuantity.four]: 1.8,
      },
      [TubMaterialTypes.typicalThrustBar]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 4,
        [AxisQuantity.four]: 4,
      },
      [TubMaterialTypes.typicalSideBar]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 4,
        [AxisQuantity.four]: 4,
      },
    },
  },
  {
    weight: {
      from: 4.1,
      to: 5.5,
    },
    materials: {
      [TubMaterialTypes.nailsWithCount]: {
        [AxisQuantity.two]: 40,
        [AxisQuantity.three]: 40,
        [AxisQuantity.four]: 40,
      },
      [TubMaterialTypes.nailsWithWeight]: {
        [AxisQuantity.two]: 1.8,
        [AxisQuantity.three]: 1.8,
        [AxisQuantity.four]: 1.8,
      },
      [TubMaterialTypes.typicalThrustBar]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 4,
        [AxisQuantity.four]: 4,
      },
      [TubMaterialTypes.typicalSideBar]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 4,
        [AxisQuantity.four]: 4,
      },
    },
  },
  {
    weight: {
      from: 5.6,
      to: 6.3,
    },
    materials: {
      [TubMaterialTypes.nailsWithCount]: {
        [AxisQuantity.two]: 64,
        [AxisQuantity.three]: 64,
        [AxisQuantity.four]: 64,
      },
      [TubMaterialTypes.nailsWithWeight]: {
        [AxisQuantity.two]: 2.9,
        [AxisQuantity.three]: 2.9,
        [AxisQuantity.four]: 2.9,
      },
      [TubMaterialTypes.typicalThrustBar]: {
        [AxisQuantity.two]: 8,
        [AxisQuantity.three]: 8,
        [AxisQuantity.four]: 8,
      },
      [TubMaterialTypes.typicalSideBar]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 4,
        [AxisQuantity.four]: 4,
      },
    },
  },
  {
    weight: {
      from: 6.4,
      to: 12,
    },
    materials: {
      [TubMaterialTypes.nailsWithCount]: {
        [AxisQuantity.two]: 64,
        [AxisQuantity.three]: 64,
        [AxisQuantity.four]: 64,
      },
      [TubMaterialTypes.nailsWithWeight]: {
        [AxisQuantity.two]: 2.9,
        [AxisQuantity.three]: 2.9,
        [AxisQuantity.four]: 2.9,
      },
      [TubMaterialTypes.typicalThrustBar]: {
        [AxisQuantity.two]: 8,
        [AxisQuantity.three]: 8,
        [AxisQuantity.four]: 8,
      },
      [TubMaterialTypes.typicalSideBar]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 4,
        [AxisQuantity.four]: 4,
      },
    },
  },
];

// Таблица "ТУБ" (Крепление с помощью типовых упорных брусков)
export const TUB_MACHINES: Machine[] = [
  {
    weight: {
      from: 0,
      to: 2,
    },
    calculationType: CalculationType.TUB,
    hasBrakes: true,
    [AxisQuantity.two]: 4,
    [AxisQuantity.three]: 5,
    [AxisQuantity.four]: 6,
  },
  {
    weight: {
      from: 2.1,
      to: 4,
    },
    calculationType: CalculationType.TUB,
    hasBrakes: true,
    [AxisQuantity.two]: 5,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: {
      from: 4.1,
      to: 5.5,
    },
    calculationType: CalculationType.TUB,
    hasBrakes: true,
    [AxisQuantity.two]: 6,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 4,
  },
  {
    weight: {
      from: 5.6,
      to: 6.3,
    },
    calculationType: CalculationType.TUB,
    hasBrakes: true,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 7,
    [AxisQuantity.four]: 0,
  },
  {
    weight: {
      from: 6.4,
      to: 12,
    },
    calculationType: CalculationType.TUB,
    hasBrakes: true,
    [AxisQuantity.two]: 1,
    [AxisQuantity.three]: 3,
    [AxisQuantity.four]: 2,
  },
  {
    weight: {
      from: 12.1,
      to: 40,
    },
    hasBrakes: true,
    calculationType: CalculationType.SBR,
  },
  {
    weight: {
      from: 0,
      to: 10,
    },
    hasBrakes: false,
    calculationType: CalculationType.SBR,
  },
];
