import {inject, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

  transform(url: string, args?: any): unknown {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
