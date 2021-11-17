import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from '../shared/actors.service';

@Component({
  selector: 'app-characters-single',
  templateUrl: './characters-single.component.html',
  styleUrls: ['./characters-single.component.scss'],
})
export class CharactersSingleComponent implements OnInit {
  actor;

  constructor(
    private actorService: ActorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      const actorname = params['actorname'];
      this.actor = await this.actorService.getActor(actorname);
      console.log(this.actor);
    });
  }
}
