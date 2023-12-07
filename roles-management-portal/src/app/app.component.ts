// import { Component, Signal, signal } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { SelectorComponent } from './selector/selector.component';

// @Component({
//   selector: 'app-root',
//   // standalone: true,
//   imports: [CommonModule, SelectorComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })
// export class AppComponent {
//   title: string = 'ROLES MANAGEMENT PORTAL';
//   selectedRole = signal('ALL');

//   setRole(value: any) {
//     this.selectedRole.set(value);
//   }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app1';
}
