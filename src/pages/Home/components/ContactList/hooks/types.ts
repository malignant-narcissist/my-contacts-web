import { Reducer } from "preact/hooks";

export type CardType = {
  id: string;
  name: string;
  socialMedia?: 'instagram' | 'facebook' | 'whatsapp' | 'telegram';
  email: `${string}@${string}.${string}`;
  phone: `(${string}) ${string}-${string}`;
}

export type OrderAscReducerFunctionType = Reducer<'ASC' | 'DESC', never>