import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];
  heroesBorrados: string[] = [];


  borrarHeroe() {
    if (this.heroes.length!=0) {
      this.heroesBorrados.push(this.heroes.shift() || '');
    }

   

  }


}


