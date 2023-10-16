import { number } from "zod";

export interface IUserInfo {
    firstName: string;
    lastName: string;
    age: number;
    city: string;
    hobbies: string[];
  }

  export interface IDictHobbies {
    code: number;
    expectedValue: string;
    label: string;
  }