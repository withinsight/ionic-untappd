import {Pipe} from '@angular/core';

@Pipe({
  name: 'plural',
  pure: false
})

export class Plural {
  transform(value) {
    var n = 0;
    for (let item in value) {
      if (value[item] === true) {
        n++;
      }
    }
    if (n > 1) {
      return 's';
    }
  }
}
