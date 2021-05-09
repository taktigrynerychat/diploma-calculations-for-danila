// @ts-ignore
import * as _ from 'lodash/fp';

enum CalculationType { // тип расчета
  UMK,
  TUB,
  SBR,
}

enum AxisQuantity { // количество осей
  two = 2,
  three,
  four,
}

enum MaterialTypes { // типы материалов
  nailsWithCount, // гвозди 6мм, штуки
  nailsWithWeight, // гвозди 6мм, кг
  typicalThrustBar, // типовой упорный брусок
  typicalSideBar// типовой боковой брусок
}

export const MATERIAL_TYPES = [
  MaterialTypes.nailsWithCount,
  MaterialTypes.nailsWithWeight,
  MaterialTypes.typicalThrustBar,
  MaterialTypes.typicalSideBar,
];

export const TYPE_MAP = {
  [MaterialTypes.nailsWithCount]: 'гвозди 6мм, штуки',
  [MaterialTypes.nailsWithWeight]: 'гвозди 6мм, кг',
  [MaterialTypes.typicalThrustBar]: 'типовой упорный брусок',
  [MaterialTypes.typicalSideBar]: 'типовой боковой брусок',
}

export const AXIS_TYPES = [AxisQuantity.two, AxisQuantity.three, AxisQuantity.four];

interface Machine {
  hasBrakes: boolean;
  weight: { from: number; to: number };
  calculationType: CalculationType;
  [AxisQuantity.two]?: number;
  [AxisQuantity.three]?: number;
  [AxisQuantity.four]?: number;
}

interface MachineData {
  weight: { from: number; to: number };
  materials: { [key in MaterialTypes]: { [key in AxisQuantity]: number } }
}

// РАСЧЕТЫ ТУБ

const MATERIALS_DATA: MachineData[] = [
  {
    weight: {
      from: 0,
      to: 2,
    },
    materials: {
      [MaterialTypes.nailsWithCount]: {
        [AxisQuantity.two]: 40,
        [AxisQuantity.three]: 40,
        [AxisQuantity.four]: 40,
      },
      [MaterialTypes.nailsWithWeight]: {
        [AxisQuantity.two]: 1.8,
        [AxisQuantity.three]: 1.8,
        [AxisQuantity.four]: 1.8,
      },
      [MaterialTypes.typicalThrustBar]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 4,
        [AxisQuantity.four]: 4,
      },
      [MaterialTypes.typicalSideBar]: {
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
      [MaterialTypes.nailsWithCount]: {
        [AxisQuantity.two]: 40,
        [AxisQuantity.three]: 40,
        [AxisQuantity.four]: 40,
      },
      [MaterialTypes.nailsWithWeight]: {
        [AxisQuantity.two]: 1.8,
        [AxisQuantity.three]: 1.8,
        [AxisQuantity.four]: 1.8,
      },
      [MaterialTypes.typicalThrustBar]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 4,
        [AxisQuantity.four]: 4,
      },
      [MaterialTypes.typicalSideBar]: {
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
      [MaterialTypes.nailsWithCount]: {
        [AxisQuantity.two]: 40,
        [AxisQuantity.three]: 40,
        [AxisQuantity.four]: 40,
      },
      [MaterialTypes.nailsWithWeight]: {
        [AxisQuantity.two]: 1.8,
        [AxisQuantity.three]: 1.8,
        [AxisQuantity.four]: 1.8,
      },
      [MaterialTypes.typicalThrustBar]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 4,
        [AxisQuantity.four]: 4,
      },
      [MaterialTypes.typicalSideBar]: {
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
      [MaterialTypes.nailsWithCount]: {
        [AxisQuantity.two]: 64,
        [AxisQuantity.three]: 64,
        [AxisQuantity.four]: 64,
      },
      [MaterialTypes.nailsWithWeight]: {
        [AxisQuantity.two]: 2.9,
        [AxisQuantity.three]: 2.9,
        [AxisQuantity.four]: 2.9,
      },
      [MaterialTypes.typicalThrustBar]: {
        [AxisQuantity.two]: 8,
        [AxisQuantity.three]: 8,
        [AxisQuantity.four]: 8,
      },
      [MaterialTypes.typicalSideBar]: {
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
      [MaterialTypes.nailsWithCount]: {
        [AxisQuantity.two]: 64,
        [AxisQuantity.three]: 64,
        [AxisQuantity.four]: 64,
      },
      [MaterialTypes.nailsWithWeight]: {
        [AxisQuantity.two]: 2.9,
        [AxisQuantity.three]: 2.9,
        [AxisQuantity.four]: 2.9,
      },
      [MaterialTypes.typicalThrustBar]: {
        [AxisQuantity.two]: 8,
        [AxisQuantity.three]: 8,
        [AxisQuantity.four]: 8,
      },
      [MaterialTypes.typicalSideBar]: {
        [AxisQuantity.two]: 4,
        [AxisQuantity.three]: 4,
        [AxisQuantity.four]: 4,
      },
    },
  },
];

const MACHINES: Machine[] = [
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

type TubResult = { [key in MaterialTypes]: number } & { weight?: { from: number; to: number } };

// функция, расчитывающая промежуточный результат для одной машины
export function TUB(machine: Machine, data: MachineData): TubResult {
  const result: TubResult = {
    weight: machine.weight,
    [MaterialTypes.nailsWithCount]: 0,
    [MaterialTypes.nailsWithWeight]: 0,
    [MaterialTypes.typicalThrustBar]: 0,
    [MaterialTypes.typicalSideBar]: 0,
  };

  MATERIAL_TYPES
    .forEach(materialKey => {
      result[materialKey] = AXIS_TYPES.reduce((prev, axis) => {
        return prev + data.materials[materialKey][axis] * machine[axis];
      }, 0);
    });

  return result;
}

// главная функция для расчета ТУБ для всех машин
function getTubResults(machines: Machine[], materialsData: MachineData[]): { [key: string]: number } {

  // промежуточные результаты для каждой из машин
  const tubResults: TubResult[] = [];

  machines.forEach(machine => {
    materialsData.forEach(data => {
      if (_.isEqual(machine.weight, data.weight)) {
        tubResults.push(TUB(machine, data));
      }
    });
  });

  // сумма всех промежуточных в финальный результат
  const tubFinalResult: { [key: string]: number } = {
  };

  MATERIAL_TYPES.forEach(materialKey => {
    tubFinalResult[TYPE_MAP[materialKey]] = tubResults.reduce((prev, result) => {
      return prev + result[materialKey];
    }, 0);
  });

  return tubFinalResult;
}

console.log('ТУБ:', getTubResults(MACHINES, MATERIALS_DATA));
/*
  Вывод результата расчетов:
  гвозди 6мм, кг: 91.69999999999999
  гвозди 6мм, штуки: 2032
  типовой боковой брусок: 172
  типовой упорный брусок: 224
* */

