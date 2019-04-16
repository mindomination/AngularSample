



import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: `isLarge`
})

//tell if country's population is big!

export class PipeSummary implements PipeTransform {
    
    transform(value: number) {
        
            

            if (value>10000000) return ( value  + ` population is large!`) ;
            else return value;
        
    }
}
