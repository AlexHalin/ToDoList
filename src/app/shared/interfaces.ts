export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface NavigateButtonData {
  tittle: string;
  url: string;
}

export interface ToDoList {
  id?: string;
  toDo?: string;
  children?: string;
  checked?: boolean;
}

export interface FbCreateResponse {
  name: string;
}
