import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'ironman';
    edad: number = 44;

    obtenerNombre(): string {
        return `${this.nombre}-${this.edad}`;
    }

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }
    cambiarEdad(): void {
        this.edad = 32;
    }
}