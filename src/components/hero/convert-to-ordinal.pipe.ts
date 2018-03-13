import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToOrdinal'
})

export class ConvertToOrdinalPipe{
    transform(value: number): string {
        return this.getOrdinal(value + 1);
    }

    getOrdinal(value: number): string {
        let lastDigit = value % 10;
        if(lastDigit === 1){
            return value + 'st'
          } else if(lastDigit === 2){
            return value + 'nd'
          } else if (lastDigit === 3){
            return value + 'rd'
          } else if (lastDigit > 3){
            return value + 'th'
          }
    }
}