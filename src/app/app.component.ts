import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


interface TpId {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent {
  value:string = 'kupi15';
  email:string = 'email';
  passwd:string = 'password';
}

/*
export class DropdownBasicDemo implements OnInit {
  tpId: TpId[] | undefined;

  selectedTpid: TpId | undefined;

  ngOnInit() {
      this.tpId = [
          { name: 'Nit', code: 'NI' },
          { name: 'Cedula de ciudadania', code: 'CC' },
          { name: 'Cedula de extranjeria', code: 'CE' },
          { name: 'Tarjeta de identidad', code: 'TI' },
          { name: 'Permiso especial de permanencia', code: 'PE' },
          { name: 'Permiso temporal de permanencia', code: 'PT'}
      ];
  }
}
*/
