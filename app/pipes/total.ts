import {Pipe} from '@angular/core';

@Pipe({
  name: "total",
  pure: false
})

export class Total {
  transform(value) {
    var n = 0;
    for (let item in value) {
      if (value[item] === true) {
        n++;
      }
    }
    return n;
  }
}
