import {Component, input, OnInit} from '@angular/core';
import {CssColor} from '../../../../shared/types/colors.type';
import {SVGName, SVGSizes} from '../../../../shared/types/svg.type';
import {CustomSvgIconComponent} from '../../../../shared/components/custom-svg-icon/custom-svg-icon.component';

type DashboardItemType = 'text' | 'svg' | 'compass' | 'form';

@Component({
  selector: 'si-dashboard-item',
  imports: [
    CustomSvgIconComponent,
  ],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss'
})
export class DashboardItemComponent implements OnInit {
  type = input.required<DashboardItemType>();
  backgroundColor = input<CssColor>('white');
  textColor = input<CssColor>('black');
  text = input<string>();
  svgPath = input<SVGName>();
  svgSize = input<SVGSizes>(24);

  ngOnInit() {
    this.validInputs();
  }

  validInputs() {
    switch (this.type()) {
      case 'text':
        if (!this.text()) {
          console.error("DashBoardItemComponent: text is required for type 'text'");
        }
        break;
      case 'svg':
        if (!this.svgPath()) {
          console.error("DashBoardItemComponent: svgPath is required for type 'svg'");
        }
        break;
    }
  }
}
