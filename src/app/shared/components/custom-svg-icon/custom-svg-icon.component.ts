import {Component, input} from '@angular/core';
import {CssColor} from '../../types/colors.type';
import {SVGName, SVGSizes} from '../../types/svg.type';

@Component({
  selector: 'si-custom-svg-icon',
  imports: [],
  templateUrl: './custom-svg-icon.component.html',
  styleUrl: './custom-svg-icon.component.scss',
})
export class CustomSvgIconComponent {
  /** This component is used to display an SVG icon. */

  svgPath = input.required<SVGName>();
  color = input<CssColor>('black');
  svgSize = input<SVGSizes>(24);

  getSvgPath(): string {
    return `svg/${this.svgPath()}.svg`;
  }

}
