import { Component, OnInit, Output, EventEmitter, signal } from '@angular/core';
import { IRole } from '../models';

@Component({
  selector: 'selector-component',
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss',
})
export class SelectorComponent implements OnInit {
  @Output() setRole = new EventEmitter<any>();
  private apiUrl: string = 'http://localhost:30001/roles';
  roleList = signal<IRole[]>([]);

  ngOnInit(): void {
    this.getRoles();
  }

  private async getRoles() {
    await fetch(this.apiUrl, {
      method: 'GET',
      headers: { accept: 'application/json' },
    })
      .then((roles) => roles.json())
      .then((roles) => this.roleList.set(roles));
  }

  onChange({ value }: any) {
    if (!this.setRole) {
      console.error(
        '[Role Management Portal]: Please pass the function call setRole'
      );
      return;
    }
    this.setRole.emit(value);
  }
}
