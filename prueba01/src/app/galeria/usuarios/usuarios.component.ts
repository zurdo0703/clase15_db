import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  usuarios=[
  	{nombre:'pedro', apellido: 'perez', edad: 12 },
  	{nombre:'jose', apellido: 'bolaños', edad: 21 },
  	{nombre:'antonio', apellido: 'narvaez', edad: 23 },
  	{nombre:'maria', apellido: 'losano', edad: 65 },
  	{nombre:'matilde', apellido: 'lina', edad: 34 }
  ]
}
