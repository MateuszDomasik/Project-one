import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {
  optionsToSelect = ['RedBull', 'Ferrari', 'McLaren', 'Aston Martin'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
