import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userName:string="";
  @Output() userAdded = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onUserAdded(){
    this.userAdded.emit(this.userName);
  }

}
