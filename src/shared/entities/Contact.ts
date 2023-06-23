type Contact<S extends string = string> = {
  id: S;
  name: S;
  socialMedia?: 'instagram' | 'facebook' | 'whatsapp' | 'telegram';
  email: `${S}@${S}.${S}`;
  phone: `(${S}) ${S}-${S}`;
};

export type { Contact };
