// @ts-ignore
import * as _ from 'lodash/fp';
import {
  AXIS_TYPES,
  CalculationType,
  Machine,
  TubMachineData,
  TUB_MACHINES,
  TUB_MATERIAL_TYPES,
  TUB_MATERIALS_DATA,
  TubMaterialTypes,
  TUB_MATERIAL_TYPE_MAP,
} from './data/tub.data';
import { displayRes } from './index';

type TubResult = { [key in TubMaterialTypes]: number } & { weight?: { from: number; to: number } };

// функция, расчитывающая промежуточный результат для одной машины
export function TUB(machine: Machine, data: TubMachineData): TubResult {
  const result: TubResult = {
    weight: machine.weight,
    [TubMaterialTypes.nailsWithCount]: 0,
    [TubMaterialTypes.nailsWithWeight]: 0,
    [TubMaterialTypes.typicalThrustBar]: 0,
    [TubMaterialTypes.typicalSideBar]: 0,
  };

  TUB_MATERIAL_TYPES
    .forEach(materialKey => {
      result[materialKey] = AXIS_TYPES.reduce((prev, axis) => {
        return prev + data.materials[materialKey][axis] * machine[axis];
      }, 0);
    });

  return result;
}

// главная функция для расчета ТУБ для всех машин
function getTubResults(machines: Machine[], materialsData: TubMachineData[]): { [key: string]: number } {

  // промежуточные результаты для каждой из машин
  const tubResults: TubResult[] = [];

  machines.forEach(machine => {
    materialsData.forEach(data => {
      if (_.isEqual(machine.weight, data.weight) && machine.calculationType === CalculationType.TUB) {
        tubResults.push(TUB(machine, data));
      }
    });
  });

  // сумма всех промежуточных в финальный результат
  const tubFinalResult: { [key: string]: number } = {
  };

  TUB_MATERIAL_TYPES.forEach(materialKey => {
    tubFinalResult[TUB_MATERIAL_TYPE_MAP[materialKey]] = tubResults.reduce((prev, result) => {
      return prev + result[materialKey];
    }, 0);
  });

  return tubFinalResult;
}
const tub = getTubResults(TUB_MACHINES, TUB_MATERIALS_DATA);
console.log('ТУБ:', getTubResults(TUB_MACHINES, TUB_MATERIALS_DATA));
displayRes(tub, 'ТУБ');
/*
  Вывод результата расчетов:
  гвозди 6мм, кг: 91.69999999999999
  гвозди 6мм, штуки: 2032
  типовой боковой брусок: 172
  типовой упорный брусок: 224
* */

