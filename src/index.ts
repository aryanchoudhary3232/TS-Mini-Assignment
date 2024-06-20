const userName = document.querySelector('#user') as HTMLInputElement;
const formSubmit = document.querySelector('#form') as HTMLFormElement;
const main_container = document.querySelector('.main_container') as HTMLElement;

interface UserData {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
}

