// @ts-ignore
import * as _ from "lodash/fp";
import { AXIS_TYPES, Machine, MachineData, MACHINES, MATERIAL_TYPES, MATERIALS_DATA, MaterialTypes, TYPE_MAP } from './data/tub.data';

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

