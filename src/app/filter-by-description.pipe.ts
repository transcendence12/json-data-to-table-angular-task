import { Pipe, PipeTransform } from '@angular/core';
import { DataOrder } from './models/data-model';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(value: any, args?: string): DataOrder[] {
    if(!args) {
      return value;
    }

    return value.filter((value: any) => {
      return (value.description.toLocaleLowerCase().includes(args));
    })
  }
}
