import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'racs-admin-ranks-table',
  templateUrl: './ranks-table.component.html',
  styleUrls: ['./ranks-table.component.scss']
})
export class RanksTableComponent implements OnInit {

  @Input() filterInput: HTMLInputElement | undefined;

  public displayedColumns: string[] = ['abbreviation', 'qualification', 'editAction', 'deleteAction'];
  public rankData: any = [
    {abbreviation: '1', qualification: '1st Class'},
    {abbreviation: '2', qualification: '2nd Class'},
    {abbreviation: '3', qualification: '3rd Class'},
    {abbreviation: '4', qualification: '4th Class'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
