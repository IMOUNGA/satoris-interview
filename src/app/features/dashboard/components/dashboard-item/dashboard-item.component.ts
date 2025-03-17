import {Component, input, OnInit, output} from '@angular/core';
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
  /** This is a dashboard item component. With this Component can create dashboard-items with text and icon */

  type = input.required<DashboardItemType>();
  backgroundColor = input<CssColor>('white');
  textColor = input<CssColor>('black');
  text = input<string>();
  svgPath = input<SVGName>();
  svgSize = input<SVGSizes>(24);
  activeForm = input<boolean>();

  onActiveFormUpdate = output<boolean>();

  ngOnInit() {
    this.validInputs();
  }

  validInputs(): void {
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
      case 'form':
        if (this.activeForm() === undefined) {
          console.error("DashBoardItemComponent: an input activeForm is required for type 'form'");
        }
    }
  }

  updateActiveForm(): void {
    this.onActiveFormUpdate.emit(!this.activeForm());
  }
}
