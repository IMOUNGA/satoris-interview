import {Component, input} from '@angular/core';

type CssColor = 'black' | 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'orange' | 'pink' | 'gray' | 'brown' | 'cyan' | 'magenta' | 'teal' | 'lavender' | 'maroon' | 'navy' | 'olive' | 'lime' | 'beige' | 'crimson' | 'coral' | 'indigo' | 'gold' | 'silver' | 'bronze' | 'platinum' | 'pearl' | 'ivory' | 'rose' | 'violet' | 'azure' | 'mint' | 'lime' | 'teal' | 'aqua' | 'cyan' | 'blue' | 'navy' | 'indigo' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'lime' | 'olive' | 'brown' | 'gray' | 'black' | 'white' | 'transparent';

@Component({
  selector: 'si-custom-svg-icon',
  imports: [],
  templateUrl: './custom-svg-icon.component.html',
  styleUrl: './custom-svg-icon.component.scss'
})
export class CustomSvgIconComponent {
  color = input<CssColor>('black');

}
