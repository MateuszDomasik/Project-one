import { Component, OnInit } from '@angular/core';
import { logging } from 'primeng-wrapper';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickMe = () => {
    console.log('button clicked');
    logging(':)')
  }
}
