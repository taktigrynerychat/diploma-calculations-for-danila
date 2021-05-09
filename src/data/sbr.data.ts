import { AxisQuantity, CalculationType, Machine } from './tub.data';

export enum SbrMaterialTypes { // типы материалов
  wireWithWeight, // проволока 6мм, кг
  wireWithCount, // проволока 6мм, пог.м
  plateWithStretch, // табель растяжка
  thrustBars,// бруски упорны
  nailsWithCount, // гвозди 6мм, штуки
  nailsWithWeight, // гвозди 6мм, кг
}

export const SBR_MATERIAL_TYPES = [
  SbrMaterialTypes.wireWithWeight,
  SbrMaterialTypes.wireWithCount,
  SbrMaterialTypes.plateWithStretch,
  SbrMaterialTypes.thrustBars,
  SbrMaterialTypes.nailsWithCount,
  SbrMaterialTypes.nailsWithWeight,
];

export const SBR_MATERIAL_TYPE_MAP = {
  [SbrMaterialTypes.wireWithWeight]: 'проволока 6мм, кг',
  [SbrMaterialTypes.wireWithCount]: 'проволока 6мм, пог.м',
  [SbrMaterialTypes.plateWithStretch]: 'табель растяжка',
  [SbrMaterialTypes.thrustBars]: 'бруски упорны',
  [SbrMaterialTypes.nailsWithCount]: 'гвозди 6мм, штуки',
  [SbrMaterialTypes.nailsWithWeight]: 'гвозди 6мм, кг',
}


export interface SbrMachineData {
  weight: { from: number; to: number };
  materials: { [key in SbrMaterialTypes]: { [key in AxisQuantity]: number } },
  hasBreaks: boolean;
}

// Таблицы "РАСЧЕТЫ СБР"
export const SBR_MATERIALS_DATA: SbrMachineData[] = [
  // первая с тормозами
  {
    weight: {
      from: 0,
      to: 2,
    },
    hasBreaks: true,
    materials: {
      [SbrMaterialTypes.wireWithWeight]: {
        [AxisQuantity.two]: 4.4,
        [AxisQuantity.three]: 4.4,
        [AxisQuantity.four]: 4.4,
      },
      [SbrMaterialTypes.wireWithCount]: {
        [AxisQuantity.two]: 20,
        [AxisQuantity.three]: 20,
        [AxisQuantity.four]: 20,
      },
      [SbrMaterialTypes.plateWithStretch]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 4,
        [AxisQuantity.four]: 4,
      },
      [SbrMaterialTypes.thrustBars]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 8,
        [AxisQuantity.four]: 8,
      },
      [SbrMaterialTypes.nailsWithCount]: {
        [AxisQuantity.two]: 16,
        [AxisQuantity.three]: 16,
        [AxisQuantity.four]: 16,
      },
      [SbrMaterialTypes.nailsWithWeight]: {
        [AxisQuantity.two]: 0.8,
        [AxisQuantity.three]: 0.8,
        [AxisQuantity.four]: 0.8,
      },
    },
  },
  // первая без тормозов
  {
    weight: {
      from: 0,
      to: 3.5,
    },
    hasBreaks: false,
    materials: {
      [SbrMaterialTypes.wireWithWeight]: {
        [AxisQuantity.two]: 4.4,
        [AxisQuantity.three]: 4.4,
        [AxisQuantity.four]: 4.4,
      },
      [SbrMaterialTypes.wireWithCount]: {
        [AxisQuantity.two]: 20,
        [AxisQuantity.three]: 20,
        [AxisQuantity.four]: 20,
      },
      [SbrMaterialTypes.plateWithStretch]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 4,
        [AxisQuantity.four]: 4,
      },
      [SbrMaterialTypes.thrustBars]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 8,
        [AxisQuantity.four]: 8,
      },
      [SbrMaterialTypes.nailsWithCount]: {
        [AxisQuantity.two]: 16,
        [AxisQuantity.three]: 16,
        [AxisQuantity.four]: 16,
      },
      [SbrMaterialTypes.nailsWithWeight]: {
        [AxisQuantity.two]: 0.8,
        [AxisQuantity.three]: 0.8,
        [AxisQuantity.four]: 0.8,
      },
    },
  },
];

// Таблица "СБР" (Способ бруски растяжки)
export const SBR_MACHINES: Machine[] = [
  // c тормозами
  {
    weight: { from: 0, to: 2 },
    calculationType: CalculationType.SBR,
    hasBrakes: true,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: { from: 2.1, to: 4 },
    calculationType: CalculationType.SBR,
    hasBrakes: true,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: { from: 4.1, to: 5.5 },
    calculationType: CalculationType.SBR,
    hasBrakes: true,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: { from: 5.6, to: 6.3 },
    calculationType: CalculationType.SBR,
    hasBrakes: true,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: { from: 6.4, to: 12 },
    calculationType: CalculationType.SBR,
    hasBrakes: true,
    [AxisQuantity.two]: 100,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: { from: 12.1, to: 16 },
    calculationType: CalculationType.SBR,
    hasBrakes: true,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: { from: 16.1, to: 18 },
    calculationType: CalculationType.SBR,
    hasBrakes: true,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: { from: 18.1, to: 22 },
    calculationType: CalculationType.SBR,
    hasBrakes: true,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: { from: 22.1, to: 24 },
    calculationType: CalculationType.SBR,
    hasBrakes: true,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: { from: 24.1, to: 30 },
    calculationType: CalculationType.SBR,
    hasBrakes: true,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: { from: 30.1, to: 40 },
    calculationType: CalculationType.SBR,
    hasBrakes: true,
    [AxisQuantity.two]: 5,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  // без тормозов
  {
    weight: { from: 0, to: 3.5 },
    calculationType: CalculationType.SBR,
    hasBrakes: false,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 5,
    [AxisQuantity.four]: 0,
  },
  {
    weight: { from: 3.6, to: 7 },
    calculationType: CalculationType.SBR,
    hasBrakes: false,
    [AxisQuantity.two]: 0,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  },
  {
    weight: { from: 7.1, to: 10 },
    calculationType: CalculationType.SBR,
    hasBrakes: false,
    [AxisQuantity.two]: 5,
    [AxisQuantity.three]: 0,
    [AxisQuantity.four]: 0,
  }
]
