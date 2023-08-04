import { NavigatorScreenParams } from "@react-navigation/native";
import { Book } from "../types/book";

export type AuthNavigator = {
  AuthenticationScreen: undefined;
};
export type BooksListNavigator = {
  Library: undefined;
  Books: undefined;
  Favourite: undefined;
};
export type BooksNavigator = {
  BooksListNavigator: NavigatorScreenParams<BooksListNavigator>;
  BookDetailsScreen: {
    item: Book;
  };
};
export type AuthorizedContentTabNavigator = {
  Books: NavigatorScreenParams<BooksNavigator>;
  Settings: undefined;
  Profile: undefined;
};

export type AuthorizedContentNavigator = {
  AuthorizedContentTabNavigator: NavigatorScreenParams<AuthorizedContentTabNavigator>;
  AddBook: undefined;
};

export type RootNavigator = {
  WelcomeScreen: undefined;
  AuthNavigator: NavigatorScreenParams<AuthNavigator>;
  AuthorizedContentNavigator: NavigatorScreenParams<AuthorizedContentTabNavigator>;
};
