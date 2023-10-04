import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable, map } from 'rxjs';
import { IUserInfo } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/apiService';
import { userColumnService } from 'src/app/services/user-column.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  user$: Observable<IUserInfo[]> | undefined;
  hobby = 'podróże';
  columns: ColDef[] = []

  constructor(
    private service: UserService,
    protected readonly userColService: userColumnService
  ) {}

  ngOnInit(): void {
    this.usersData();
    this.setColumns();
  }

  usersData() {
    this.user$ = this.service
      .getUsers()
      .pipe(
        map((users) =>
          users.filter((user) => user.hobbies.includes(this.hobby))
        )
      )
  }

  setColumns() {
    this.columns = this.userColService.getUserColumns();
  }
}
