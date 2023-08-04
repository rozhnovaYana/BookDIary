import { ActionTypes, IAuthContext, LOGIN, LOGOUT } from "./types";

export default (state: IAuthContext, action: LOGIN | LOGOUT) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.LOGIN:
      return { isLogin: true, user: payload.user };
    case ActionTypes.LOGOUT:
      return { isLogin: false };
  }
};
