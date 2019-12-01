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
  }

}
