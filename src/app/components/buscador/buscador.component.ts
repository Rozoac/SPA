import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor( private activateRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(param => {
      this.termino = param['termino'];
      this.heroes = this._heroesService.buscarHeroes(param['termino']);
    });
  }

}
