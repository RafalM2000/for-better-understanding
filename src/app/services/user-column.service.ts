import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Injectable({ providedIn: 'root' })
export class userColumnService {
  getUserColumns(): ColDef[] {
    return [
      {
        field: 'firstName',
        headerName: 'First Name',
        width: 150,
        filter: true,
        floatingFilter: true,
      },
      {
        field: 'lastName',
        headerName: 'Last Name',
        width: 175,
        filter: true,
        floatingFilter: true,
      },
      {
        field: 'age',
        headerName: 'Age',
        width: 100,
        filter: 'agNumberColumnFilter',
        floatingFilter: true,
      },
      {
        field: 'city',
        headerName: 'City',
        width: 200,
        filter: true,
        floatingFilter: true,
      },
      {
        field: 'hobbies',
        headerName: 'Hobbies',
        width: 250,
        filter: true,
        floatingFilter: true,
      },
    ];
  }
}
