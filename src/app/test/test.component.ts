

import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-test',
  standalone: true,
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
imports:[

],
providers:[

]
})

export class TestComponent {
  setProgress($event: Event) {
    throw new Error('Method not implemented.');
  }

  myActionLabel: any;

  @Input() value = 0;
  progress: any;
}
