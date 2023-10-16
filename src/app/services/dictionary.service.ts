import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDictHobbies } from '../interfaces/user';

@Injectable({ providedIn: 'root' })
export class dictionaryService {
  getDictHobbies(): Observable<IDictHobbies[]> {
    return of([
      { code: 0, expectedValue: 'podróże', label: 'podróże' },
      { code: 1, expectedValue: 'e-sport', label: 'e-sport' },
      { code: 3, expectedValue: 'muzyka', label: 'muzyka' },
      { code: 3, expectedValue: 'sport', label: 'sport' },
    ]);
  }
}
