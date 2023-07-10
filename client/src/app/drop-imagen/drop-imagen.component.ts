import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-imagen',
  templateUrl: './drop-imagen.component.html',
  styleUrls: ['./drop-imagen.component.css']
})
export class DropImagenComponent {
  @Output() fileSelected = new EventEmitter<File>();

  handleFileInput(event: any) {
    const file = event.target.files[0];
    this.fileSelected.emit(file);
  }
}
