import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import { Observable, map, of, switchMap } from 'rxjs';
import { IUserInfo } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/apiService';
import { userColumnService } from 'src/app/services/user-column.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  user$!: Observable<IUserInfo[]>;
  columns: ColDef[] = [];
  userForm!: FormGroup;
  hobbyDict = [
    { code: 0, expectedValue: 'podróże', label: 'podróże' },
    { code: 1, expectedValue: 'e-sport' , label: 'e-sport' },
    { code: 3, expectedValue: 'muzyka' , label: 'muzyka' },
    { code: 3, expectedValue: 'sport', label: 'sport' },
  ];

  constructor(
    private service: UserService,
    protected readonly userColService: userColumnService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.usersData();    
    this.setColumns();
    this.initForm();
    this.setWatchers();
  }

  private usersData() {
    this.user$ = this.service.getUsers();
  }

  private setColumns() {
    this.columns = this.userColService.getUserColumns();
  }

  private initForm() {
    this.userForm = this.fb.group({
      hobby: [null, Validators.required],
    });
  }

  private setWatchers() {
    this.hobbyAbstartControls?.valueChanges
      .pipe(
        switchMap((selectedHobby) =>
        this.service.getUsers().pipe(
            map((users) => {
              const filteredUsers = users.filter((user) => user.hobbies.includes(selectedHobby));
              return filteredUsers;
            })
          )
        )
      )
      .subscribe(filteredUsers => {
        this.user$ = of(filteredUsers);
      });
  }

  get hobbyAbstartControls() {
    return this.userForm.get('hobby');
  }
}
