import {Component, input} from '@angular/core';
import {CssColor} from '../../../../shared/types/colors.type';
import {SVGName, SVGSizes} from '../../../../shared/types/svg.type';
import {CustomSvgIconComponent} from '../../../../shared/components/custom-svg-icon/custom-svg-icon.component';

@Component({
  selector: 'si-dashboard-item',
  imports: [
    CustomSvgIconComponent,
  ],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss'
})
export class DashboardItemComponent {
  text = input.required<string>();
  backgroundColor = input<CssColor>('white');
  textColor = input<CssColor>('black');
  svgPath = input<SVGName>();
  svgSize = input<SVGSizes>(24);
}
