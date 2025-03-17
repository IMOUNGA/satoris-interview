import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {CssColor} from '../../types/colors.type';
import {SVGName, SVGSizes} from '../../types/svg.type';

@Component({
  selector: 'si-custom-svg-icon',
  imports: [],
  templateUrl: './custom-svg-icon.component.html',
  styleUrl: './custom-svg-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomSvgIconComponent {
  /** This component is used to display an SVG icon. */

  svgPath: InputSignal<SVGName> = input.required<SVGName>();
  color: InputSignal<CssColor> = input<CssColor>('black');
  svgSize: InputSignal<SVGSizes> = input<SVGSizes>(24);

  getSvgPath(): string {
    return `svg/${this.svgPath()}.svg`;
  }

}
