import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

    transform(value: any) {
        if (value.length > 25) {
            return value.substr(0, 25) + ' ...';
        }
        return value;
    }

}
