// import { DoBootstrap, Injector, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { createCustomElement } from '@angular/elements';
// import { SelectorComponent } from './selector.component';

// @NgModule({
//   imports: [BrowserModule],
//   declarations: [SelectorComponent],
//   bootstrap: [SelectorComponent],
//   exports: [SelectorComponent],
// })
// export class SelectorModule implements DoBootstrap {
//   constructor(private injector: Injector) {
//     const component = createCustomElement(SelectorComponent, {
//       injector: this.injector,
//     });
//     customElements.define('roles-selector', component);
//   }

//   ngDoBootstrap() {
//     console.log('angular bootstrap');
//   }
// }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector.component';

@NgModule({
  declarations: [SelectorComponent],
  imports: [CommonModule],
})
export class SelectorModule {}
