import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('counterApp');
  counter:number = 0;

  handleIncrement(){
    this.counter = this.counter + 1;
  }

  handleDecrement(){
    this.counter = this.counter - 1;
  }
}
