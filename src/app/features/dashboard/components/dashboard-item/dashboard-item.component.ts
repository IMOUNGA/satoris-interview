import {Component, input, OnInit} from '@angular/core';
import {CssColor} from '../../../../shared/types/colors.type';
import {SVGName, SVGSizes} from '../../../../shared/types/svg.type';
import {CustomSvgIconComponent} from '../../../../shared/components/custom-svg-icon/custom-svg-icon.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'si-dashboard-item',
  imports: [
    CustomSvgIconComponent,
  ],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss'
})
export class DashboardItemComponent implements OnInit {
  text = input.required<string>();
  backgroundColor = input<CssColor>('white');
  textColor = input<CssColor>('black');
  svgPath = input<SVGName>();
  svgSize = input<SVGSizes>(24);

  ngOnInit() {
    console.log('path', this.svgPath());
  }
}
