// @ts-ignore
import * as _ from 'lodash/fp';
import {
  SBR_MACHINES,
  SBR_MATERIAL_TYPE_MAP,
  SBR_MATERIAL_TYPES,
  SBR_MATERIALS_DATA,
  SbrMachineData,
  SbrMaterialTypes,
} from './data/sbr.data';
import {
  AXIS_TYPES,
  CalculationType,
  Machine,
} from './data/tub.data';

type SbrResult = { [key in SbrMaterialTypes]: number } & { weight?: { from: number; to: number } };

// функция, расчитывающая промежуточный результат для одной машины
export function SBR(machine: Machine, data: SbrMachineData): SbrResult {
  const result: SbrResult = {
    weight: machine.weight,
    [SbrMaterialTypes.wireWithWeight]: 0,
    [SbrMaterialTypes.wireWithCount]: 0,
    [SbrMaterialTypes.plateWithStretch]: 0,
    [SbrMaterialTypes.thrustBars]: 0,
    [SbrMaterialTypes.nailsWithCount]: 0,
    [SbrMaterialTypes.nailsWithWeight]: 0,
  };

  SBR_MATERIAL_TYPES
    .forEach(materialKey => {
      result[materialKey] = AXIS_TYPES.reduce((prev, axis) => {
        return prev + data.materials[materialKey][axis] * machine[axis];
      }, 0);
    });

  return result;
}

// главная функция для расчета ТУБ для всех машин
function getSbrResults(machines: Machine[], materialsData: SbrMachineData[]): { [key: string]: number } {

  // промежуточные результаты для каждой из машин
  const sbrResults: SbrResult[] = [];

  machines.forEach(machine => {
    materialsData.forEach(data => {
      if (_.isEqual(machine.weight, data.weight) && machine.calculationType === CalculationType.SBR) {
        sbrResults.push(SBR(machine, data));
      }
    });
  });

  // сумма всех промежуточных в финальный результат
  const tubFinalResult: { [key: string]: number } = {
  };

  SBR_MATERIAL_TYPES.forEach(materialKey => {
    tubFinalResult[SBR_MATERIAL_TYPE_MAP[materialKey]] = sbrResults.reduce((prev, result) => {
      return prev + result[materialKey];
    }, 0);
  });

  return tubFinalResult;
}

console.log('CБР:', getSbrResults(SBR_MACHINES, SBR_MATERIALS_DATA));
/*
  Вывод результата расчетов:
  бруски упорны: 40
  гвозди 6мм, кг: 4
  гвозди 6мм, штуки: 80
  проволока 6мм, кг: 22
  проволока 6мм, пог.м: 100
  табель растяжка: 20
* */

