export function displayRes(obj, name){
  const nameDiv = document.createElement('div');
  nameDiv.innerHTML = `<h3>${name}</h3>`
  const resTable = document.createElement('table');
  resTable.innerHTML = Object.keys(obj).reduce((prev, key) => {
    return prev + `<tr><td>${key}</td><td>${obj[key].toFixed(2)}</td></tr>`
  }, '')
  document.getElementById('result').append(nameDiv)
  document.getElementById('result').append(resTable)
}
import './data/tub.data';
import './tub';
import './umk';
import './sbr';
