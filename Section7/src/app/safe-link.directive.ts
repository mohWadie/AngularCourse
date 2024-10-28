import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryPara = input('myapp');

  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app');

    if (wantsToLeave) {
      const adress = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href += '?from=' + this.queryPara();
      return;
    }

    event.preventDefault();
  }
}
