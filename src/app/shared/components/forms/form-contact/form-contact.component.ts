import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'si-form-contact',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.scss'
})
export class FormContactComponent {
  loading = false;
  submitted = false;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  sleep(delay: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  isFieldInvalid(name: string) {
    const input = this.form.get(name);
    return input?.invalid && (input.dirty || input.touched);
  }

  async onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      await this.sleep(2000);
      this.form.reset();
      this.loading = false;
    }
  }
}
