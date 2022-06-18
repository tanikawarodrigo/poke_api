import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ValidaSenhaService{
  ConfirmaSenha(senha: string, confirma_senha: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[senha];
      const confirmPasswordControl = formGroup.controls[confirma_senha];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.naoConfirmaSenha) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ naoConfirmaSenha: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
}

