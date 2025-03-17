import {ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';
import {CustomSvgIconComponent} from '../../../../shared/components/custom-svg-icon/custom-svg-icon.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'si-dashboard-item-picture',
  imports: [
    CustomSvgIconComponent,
    NgIf
  ],
  templateUrl: './dashboard-item-picture.component.html',
  styleUrl: './dashboard-item-picture.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardItemPictureComponent {
  /** This component is used to display an item with a picture on the background with a title and a description */

  title: InputSignal<string | undefined> = input<string>();
  picture: InputSignal<string> = input.required<string>();
  description: InputSignal<string> = input<string>('Découvrez moi');
  onClick: OutputEmitterRef<boolean> = output<boolean>();

  handleClick() {
    this.onClick.emit(true);
  }
}
