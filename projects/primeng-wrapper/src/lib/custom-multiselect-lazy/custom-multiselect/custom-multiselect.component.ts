import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-custom-multiselect',
  templateUrl: './custom-multiselect.component.html',
  styleUrls: ['./custom-multiselect.component.css']
})
export class CustomMultiselectComponent implements OnInit {
  emptyFilterMessage = 'Nic nie znaleziono.'
  defaultLabel = 'Wybierz'
  emptyMessage = 'Nic nie znaleziono.'
  
  @Input() options: string[] = [];
  selectedOptions: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
