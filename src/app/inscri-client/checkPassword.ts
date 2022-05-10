import { FormControl, ValidatorFn } from "@angular/forms";

export function passwordMatchValidator(password: string): ValidatorFn {
    return (control: FormControl) => {
      console.log(control)
      if (!control || !control.parent) {
        return null;
      }
      return control.parent.get(password).value === control.value ? null : { mismatch: true };
    };
  }