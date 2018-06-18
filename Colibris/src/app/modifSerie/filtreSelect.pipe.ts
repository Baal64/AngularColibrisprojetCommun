import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreSelect',
  pure: false
})
export class FiltreSelectPipe implements PipeTransform {

  public transform(value: any[], args?: string): any[] {

    // Remove the duplicate elements
    let uniqueArray = value.filter(function (el, index, array) { 
      return array.indexOf (el) == index;
    });
    return uniqueArray;
  }
}


