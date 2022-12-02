import { Component, OnInit } from '@angular/core';
import { ContactosService } from 'src/app/services/contactos.service';
import { Contacto, Contactos} from '../../componentes/interfaces/interfaces';
import { RespuestaBD } from '../../componentes/interfaces/interfaces';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  contactosRecientes: Contactos [] = [];


  constructor(private servicioContactos: ContactosService) { }

  ngOnInit() {
  }

}
