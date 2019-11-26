import { Component } from '@angular/core';
import {csvToJson} from 'convert-csv-to-json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  public exigences = "test";
  
  public exigencesFiltered = [1,2,3,4];
  public filtres = [ 'Behavior', 'Component'];

  ngOnInit() {
    this.exigences =  csvToJson.getJsonFromCsv("assets/Exigences_Landing_System_Categories.csv");
    console.log(this.exigences);
  }

  public setFilter(filtre){
    
    console.log(filtre);
  }
}
