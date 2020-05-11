import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number{
    let today:Date = new Date();
    let currentDate:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(currentDate - value);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && currentDate > value){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
