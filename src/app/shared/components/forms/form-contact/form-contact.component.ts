import {ChangeDetectionStrategy, ChangeDetectorRef, Component, model, ModelSignal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {SimpleButtonDirective} from '../../../directives/buttons/simple-button/simple-button.directive';

@Component({
  selector: 'si-form-contact',
  imports: [
    ReactiveFormsModule,
    NgIf,
    SimpleButtonDirective
  ],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormContactComponent {
  activeForm: ModelSignal<boolean> = model(false)
  loading = false;
  submitted = false;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private cdr: ChangeDetectorRef) {} // I decided to use the constructor here to show that I know how to use it

  sleep(delay: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  isFieldInvalid(name: string) {
    const input = this.form.get(name);
    return input?.invalid && (input.dirty || input.touched);
  }

  updateActiveForm(): void {
    this.activeForm.update(() => !this.activeForm())
  }

  async onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      await this.sleep(2000);
      this.submitted = true;
      this.cdr.markForCheck(); // I decided to use markForCheck and don't use loading and submitted has a signals for this example and show that I know how to use changeDetection
      await this.sleep(3000);
      this.form.reset();
      this.loading = false;
      this.submitted = false;
      this.updateActiveForm();
    }
  }
}
