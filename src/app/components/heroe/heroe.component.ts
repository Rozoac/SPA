import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any[] = [];

  casa:string;

  constructor(private _heroeService: HeroesService, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe( id => {
      this.heroe = this._heroeService.getHeroe(id['id']);
    });
   }


  ngOnInit() {
  }

}
