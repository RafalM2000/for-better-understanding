import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import { Observable, map, of, switchMap } from 'rxjs';
import { IDictHobbies, IUserInfo } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/apiService';
import { dictionaryService } from 'src/app/services/dictionary.service';
import { userColumnService } from 'src/app/services/user-column.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  user$!: Observable<IUserInfo[]>;
  hobbyDict$!: Observable<IDictHobbies[]>
  columns: ColDef[] = [];
  userForm!: FormGroup;

  constructor(
    private service: UserService,
    protected readonly userColService: userColumnService,
    protected readonly dictionaries: dictionaryService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.usersData(); 
    this.getDictionaries();   
    this.setColumns();
    this.initForm();
    this.setWatchers();
  }

  private usersData() {
    this.user$ = this.service.getUsers();
  }

  private getDictionaries() {
    this.hobbyDict$ = this.dictionaries.getDictHobbies()
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
