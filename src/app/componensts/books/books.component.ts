import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  columnDefs: ColDef[] = [
    { field: 'title' },
    { field: 'author' },
    { field: 'year' },
    { field: 'rating' }
  ];

  rowData = [
    { title: 'Idiota', author: 'Fiodor Dostojewski', year: 1869, rating: '****' },
    { title: 'Salambo', author: 'Gustave Flaubert', year: 1862, rating: '*****' },
    { title: 'Jądro ciemności', author: 'Konrad Korzeniowski', year: 1899, rating: '*****' }
];

}
