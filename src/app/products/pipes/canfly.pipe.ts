import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canfly'
})
export class CanflyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
