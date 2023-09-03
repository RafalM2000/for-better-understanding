import { Component, OnInit, Signal, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  name = signal('Rafał')

  constructor() { }

  ngOnInit(): void {
  }

  changeName(event: Event): void {
    const inputName = (event.target as HTMLInputElement).value;
    this.name.set(inputName);
  }

}
