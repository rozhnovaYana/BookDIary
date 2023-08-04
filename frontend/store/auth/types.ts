export interface IUser {
  name: string;
  books: string[];
  login: string;
}
export interface IAuthContext {
  isLogin: boolean;
  user?: IUser;
  login?: (user: IUser) => void;
  logout?: () => void;
}

export enum ActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export type LOGIN = {
  type: ActionTypes.LOGIN;
  payload: {
    user: IUser;
  };
};

export type LOGOUT = {
  type: ActionTypes.LOGOUT;
  payload: {};
};
