import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('counterApp');
  counter = signal(0);

  handleIncrement(){
    this.counter.set(this.counter() + 1);
  }

  handleDecrement(){
    this.counter.set(this.counter() - 1);
  }

  handleReset(){
    this.counter.set(0);
  }
}
