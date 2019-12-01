import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  public exigences = [];

  public exigencesFiltered = [];
  public filtres = [ 'Behavior', 'Component', 'Role', 'Constraint', 'Meta-requirement','Goal','Limit', 'Lack', 'Tous'];

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get('/assets/categories.json', {responseType: 'text'})
    .subscribe(data => {
      this.exigences = (JSON.parse(data));
      console.log(this.exigences);
      this.exigencesFiltered = this.exigences;
    });
  }

  public setFilter(filtre){
    this.exigencesFiltered = [];
    if(filtre === 'Tous'){
      this.exigencesFiltered = this.exigences;
    }else{
    this.exigences.forEach(exigence => {
      if(exigence['Categories'] && exigence['Categories'] === filtre) {
        this.exigencesFiltered.push(exigence);
      }
    });
  }
  }
}
