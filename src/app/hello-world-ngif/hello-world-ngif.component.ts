import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-ngif',
  templateUrl: './hello-world-ngif.component.html',
  styleUrls: ['./hello-world-ngif.component.css']
})
export class HelloWorldNgifComponent implements OnInit {

  message:string = "I'm read only!";
  canEdit:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }

}
