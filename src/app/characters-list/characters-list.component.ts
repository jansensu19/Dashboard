import { Component, OnInit } from '@angular/core';
import { ActorService } from '../shared/actors.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  actors;

  constructor(private actorService: ActorService) {}

  async ngOnInit() {
    this.actors = await this.actorService.getActors();
    console.log(this.actors);
  }
}
