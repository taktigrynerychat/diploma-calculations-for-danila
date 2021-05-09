// @ts-ignore
import * as _ from 'lodash/fp';
import { AXIS_TYPES, CalculationType } from './data/tub.data';
import { SET_DATA, SET_QUANTITY_DATA, SET_TYPES_MAP, SetData, SetQuantity, SetTypes } from './data/umk.data';
import { displayRes } from './index';

// фнкция расчета УМК для одной строки из двух таблиц
function UMK(set: SetData, quantity: SetQuantity): number {
  return AXIS_TYPES.reduce((prev, axisType) => {
    return prev + set[axisType] * quantity[axisType];
  }, 0);
}

// функция расчета УМК для УМК-ЛК и УМК-ТК
function getUmkResults(sets: SetData[], setQuantity: SetQuantity[]): { [key: string]: number } {
  let umkLkResult = 0;
  let umkTkResult = 0;
  sets.forEach(set => {
    setQuantity.forEach(quantity => {
      if (_.isEqual(set.weight, quantity.weight) && set.calculationType === CalculationType.UMK) {
        const rowRes = UMK(set, quantity);
        if (set.type === SetTypes.umkLk) {
          umkLkResult += rowRes;
        } else if (set.type === SetTypes.umkTk) {
          umkTkResult += rowRes;
        }
      }
    });
  });

  return {
    [SET_TYPES_MAP[SetTypes.umkLk]]: umkLkResult,
    [SET_TYPES_MAP[SetTypes.umkTk]]: umkTkResult,
  };
}

const umk = getUmkResults(SET_DATA, SET_QUANTITY_DATA);
displayRes(umk, 'УМК');
console.log('УМК:', umk);
/*
  Вывод результата рассчетов:
  УМК-ЛК: 0,
  УМК-ТК: 0
*/
