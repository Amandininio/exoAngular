import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appreil',
  templateUrl: './single-appreil.component.html',
  styleUrls: ['./single-appreil.component.scss']
})
export class SingleAppreilComponent implements OnInit {
  name: string = 'appareilName';
  status: string = 'appareilStatus';

  constructor(private appareilService: AppareilService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id).name;
    this.status = this.appareilService.getAppareilById(+id).status;
  }

}
