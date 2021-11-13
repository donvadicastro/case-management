import {AbstractControl, Validators} from "@angular/forms";

export module CustomValidators {
  export function requiredIf(type: string, calculated: string) {
    return function (formControl: AbstractControl) {
      if (formControl.parent?.get(type)?.value === calculated) {
        return Validators.required(formControl);
      }

      return null;
    };
  }

}
