import {Component, input} from '@angular/core';
import {CssColor} from '../../types/colors.type';
import {SVGName, SVGSizes} from '../../types/svg.type';

@Component({
  selector: 'si-custom-svg-icon',
  imports: [],
  templateUrl: './custom-svg-icon.component.html',
  styleUrl: './custom-svg-icon.component.scss',
  standalone: true,
})
export class CustomSvgIconComponent {
  svgPath = input.required<SVGName>();
  color = input<CssColor>('black');
  size = input<SVGSizes>(24);

  getSvgPath(): string {
    console.log('svgPath', this.svgPath());
    return `svg/${this.svgPath()}.svg`;
  }

}
