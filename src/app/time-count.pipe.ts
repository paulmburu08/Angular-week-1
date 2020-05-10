import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(datewithoutTime: any): number{
    let today:Date = new Date();
    let currentDate:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(currentDate - datewithoutTime);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && datewithoutTime > currentDate){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
