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

export interface List {
  id?: string;
  todo: string;
}

export interface FbCreateResponse {
  name: string;
}
