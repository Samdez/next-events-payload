/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    events: Event;
    medias: Media;
    locations: Location;
    categories: Category;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface Event {
  id: string;
  title: string;
  description?: string | null;
  date: string;
  time?: string | null;
  image?: string | Media | null;
  location?: (string | null) | Location;
  location_alt?: string | null;
  category?: (string | Category)[] | null;
  genres?: string | null;
  price?: string | null;
  sold_out?: boolean | null;
  ticketing_url?: string | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: string;
  title: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
export interface Location {
  id: string;
  name: string;
  description?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  place_id?: string | null;
  city?:
    | (
        | 'Biarritz'
        | 'Bayonne'
        | 'Anglet'
        | 'Capbreton'
        | 'Hossegor'
        | 'Seignosse'
        | 'Saint Jean de Luz'
        | 'Hendaye'
        | 'Bidart'
        | 'Guethary'
        | 'Angresse'
        | 'Labenn'
        | 'Soustons'
      )
    | null;
  image?: string | Media | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface Category {
  id: string;
  name: string;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}