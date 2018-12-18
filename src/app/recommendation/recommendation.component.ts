import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SkillService} from '../skill.service'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  constructor(private http: HttpClient ,private service: SkillService) { }

  findSkills(){ return this.http.get('http://localhost:8080/skill')
  .toPromise()
  .then((res:Response)=>res.json());
}

  ngOnInit() {

    }

}
