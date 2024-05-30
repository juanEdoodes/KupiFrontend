import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'users-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],

})


export class UsersComponent {
  value:string = 'kupi15';
}
