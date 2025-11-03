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
  // use an Angular signal for reactive counter state
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

  // keep the existing helper but operate on the signal
  handleCounter(val: string){
    if (val === 'minus') {
      if (this.counter() == 0) {
        return;
      }
      this.handleDecrement();
    } else if (val === 'plus') {
      this.handleIncrement();
    } else {
      this.handleReset();
    }
  }
}
