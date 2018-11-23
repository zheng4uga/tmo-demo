import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AllowanceInfoComponent } from './allowance-info/allowance-info.component';

@NgModule({
  declarations: [AllowanceInfoComponent],
  imports: [BrowserModule],
    entryComponents: [AllowanceInfoComponent]
})
export class AppModule { 
constructor(private injector: Injector) {
    const allowanceComponent = createCustomElement(AllowanceInfoComponent, { injector });
    customElements.define('custom-allowance-info', allowanceComponent);
  }
  ngDoBootstrap() {}
}
