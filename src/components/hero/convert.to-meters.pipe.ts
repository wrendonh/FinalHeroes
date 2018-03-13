import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToMeters'
})

export class ConvertToMetersPipe{
        transform(value: number): number {
            return value / 3.2808;
        }
}