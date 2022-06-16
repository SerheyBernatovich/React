import React from 'react';
import logo from './logo.svg';
import './App.css';
let a: number | null = 10;
a = null;

let name: Array<number> = [1, 2, 3];
let name2: number[] = [1, 2, 3];

let sex: 'mail' | 'femail';
sex = 'mail';

type UserType = {
  sayHello?: Function;
  name: string;
  age: number;
  isSumurai: boolean;
  adress: AddressType | null;
};

type AddressType = {
  cyty?: string | null;
  counry: string | null;
};

let user: UserType = {
  sayHello(message: string) {
    alert('go');
  },
  name: 'JJJ',
  age: 32,
  isSumurai: true,
  adress: { cyty: 'Ukr', counry: 'DDD' },
};

type InitialStateType = {
  sayHello?: Function;
  name: string;
  age: number;
  isSumurai: boolean;
  adress: AddressType | null;
  counter: number;
};

let initialState: InitialStateType = {
  name: 'JJJ',
  age: 32,
  isSumurai: true,
  adress: { cyty: 'Ukr', counry: 'DDD' },
  counter: 10,
};

// let initialState2 = {
//   name: null as string | null,
//   age: null as number | null,
//   isSumurai: null as boolean | null,
//   adress: [] as Array<AddressType>,
//   counter: 0,
// };
let initialState2 = {
  name: 'cc',
  age: 23,
  isSumurai: true,
  adress: [{ cyty: 'sss', counry: 'aaa' }],
  counter: 0,
};

export type InitialStateType2 = typeof initialState2;
let state: InitialStateType2 = {
  adress: [{ cyty: 'sss', counry: 'aaa' }],
  age: 32,
  counter: 2,
  isSumurai: true,
  name: 'sss',
};

const sum = (a: number, b: number) => a + b;
sum(3, 2);

let GET_TASK = 'APP/GetTask';
type GetTaskType = {
  id: number;
  type: typeof GET_TASK;
};
let action: GetTaskType = {
  id: 12,
  type: GET_TASK,
};

function App() {
  return null;
}

export default App;
