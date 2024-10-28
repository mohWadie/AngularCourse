import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TempreturePipe implements PipeTransform {
  transform(
    value: string | number | null,
    inputType: 'cel' | 'feh',
    outputType?: 'cel' | 'feh'
  ) {
    if (!value) return value;

    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp: number;
    if (inputType === 'cel' && outputType === 'feh') {
      outputTemp = val * (9 / 5) + 32;
    } else if (inputType === 'feh' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val;
    }

    let sympol: '°C' | '°F';

    if (!outputType) {
      sympol = inputType === 'cel' ? '°C' : '°F';
    } else {
      sympol = outputType === 'cel' ? '°C' : '°F';
    }

    return `${outputTemp.toFixed(2)} ${sympol}`;
  }
}
