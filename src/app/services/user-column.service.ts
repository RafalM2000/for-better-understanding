import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Injectable({ providedIn: 'root' })
export class userColumnService {
  getUserColumns(): ColDef[] {
    return [
      { field: 'firstName', headerName: 'First Name',width: 150 },
      { field: 'lastName', headerName: 'Last Name', width: 175 },
      { field: 'age', headerName: 'Age', width: 100},
      { field: 'city', headerName: 'City', width: 200 },
      { field: 'hobbies', headerName: 'Hobbies', width: 250 },
    ];
  }
}
