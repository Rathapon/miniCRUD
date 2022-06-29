import { Pipe, PipeTransform } from "@angular/core";
import { mFormModel } from "src/app/model/mForm/mForm.model";

@Pipe({
    name: 'nameFilter'
})

export class NameFilterPipe implements PipeTransform {
    transform(mForm: mFormModel[], name: string): mFormModel[] {
        if (!mForm || !name) {
            return mForm;
        }
        else {
            return mForm.filter(mForm => mForm.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
        }
        
    }

}