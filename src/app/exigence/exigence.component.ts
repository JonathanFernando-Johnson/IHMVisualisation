import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exigence',
  templateUrl: './exigence.component.html',
  styleUrls: ['./exigence.component.css']
})
export class ExigenceComponent implements OnInit {
  @Input() exigence: any;

  constructor() { 

  }

  ngOnInit() {
    this.exigence = {
      'Exigences': 'The system is controlled digitally in nominal mode and analogically in emergency mode.',
      'Lien': 'https://mi-git.univ-tlse2.fr/ECb/LGS/blob/master/description.txt#L4',
      'Categories': 'Behavior',
      'SubCategorie': 'Functionnal'
    };
  }

}
