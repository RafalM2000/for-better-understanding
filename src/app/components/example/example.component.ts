import { Component, OnInit, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/apiService';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  user$: Observable<UserInfo> | undefined;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.usersData();
  }

  usersData() {
    this.user$ = this.service.getUsers();
  }

}
