export interface ArticleAgreeResponseSuccess {}

export interface ArticleAgreeResponseError {
  message: string;
}

export type ArticleAgreeResponseData = ArticleAgreeResponseSuccess | ArticleAgreeResponseError;

export enum ArticleStatus {
  REVIEWED = 'REVIEWED',
  REJECTED = 'REJECTED',
  UPLOADED = 'UPLOADED'
}

export interface Article {
  id: string;
  author: string;
  filename: string;
  originFilename: string;
  createTime: string;
  updateTime: string;
  status: ArticleStatus;
  title: string;
  categories: string[];
  tags: string[];
  cover?: string;
}

export interface ArticleResponseSuccess {
  total: number;
  articles: Article[];
  file?: string;
}

export interface ArticleResponseError {
  message: string;
}

export type ArticleResponseData = ArticleResponseSuccess | ArticleResponseError;

export interface Author {
  id: string;
  name: string;
  descImg: string;
}

export interface AuthorResponseSuccess {
  authors: Author[];
}

export interface AuthorResponseError {
  message: string;
}

export type AuthorResponseData = AuthorResponseSuccess | AuthorResponseError;

export interface Config {
  tags: string[];
  categories: string[];
}

export interface ConfigResponseSuccess {
  config: Config;
}

export interface ConfigResponseError {
  message: string;
}

export type ConfigResponseData = ConfigResponseSuccess | ConfigResponseError;
