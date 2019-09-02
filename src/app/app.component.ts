import { MatTableDataSource } from '@angular/material';
import { MatTableFilter } from 'mat-table-filter';
import { Component, OnInit } from '@angular/core';

export class Captain {
  name: string;
  surname: string;
}

export class SpaceCraft {
  name: string;
  isConstitutionClass: boolean;
  captain: Captain;
}

const SPACECRAFT_DATA: SpaceCraft[] = [
  {name: 'Endurance', isConstitutionClass: false, captain: {name: 'Joseph', surname: 'Cooper'}},
  {name: 'Enterprise', isConstitutionClass: false, captain: {name: 'Christopher', surname: 'Pike'}},
  {name: 'Discovery', isConstitutionClass: false, captain: {name: 'Christopher', surname: 'Pike'}},
  {name: 'Enterprise', isConstitutionClass: false, captain: {name: 'Jean-Luc', surname: 'Pickard'}}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  filterEntity: SpaceCraft;
  filterType: MatTableFilter;
  displayedColumns: string[] = ['name', 'captainName', 'captainSurname', 'isConstitutionClass'];
  dataSource = new MatTableDataSource(SPACECRAFT_DATA);
  constructor() { }

  ngOnInit() {
    // Do not forget to initialize your object and it's non-primitive properties
    this.filterEntity = new SpaceCraft();
    this.filterEntity.captain = new Captain();
    this.filterType = MatTableFilter.ANYWHERE;
  }
}
