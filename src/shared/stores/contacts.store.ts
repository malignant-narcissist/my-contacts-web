import { produce } from 'immer';
import { create } from 'zustand';

type Contact = {
  id: string;
  name: string;
  socialMedia?: 'instagram' | 'facebook' | 'whatsapp' | 'telegram';
  email: `${string}@${string}.${string}`;
  phone: `(${string}) ${string}-${string}`;
};

type ContactStore<C extends Contact = Contact> = {
  contacts: Map<string, C>;
  add: (data: C | C[]) => void;
  edit: (data: Partial<C> & { id: string }) => void;
  remove: (id: string) => void;
};

type ProduceType = (data: ContactStore) => ContactStore;

const useContactStore = create<ContactStore>()((set) => ({
  contacts: new Map<string, Contact>(),
  add: (data) => {
    Array.isArray(data)
      ? set(
          produce<ProduceType>((draft) => {
            data.forEach((contact) => {
              draft.contacts.set(contact.id, contact);
            });
          }),
        )
      : set(
          produce<ProduceType>((draft) => {
            draft.contacts.set(data.id, data);
          }),
        );
  },
  edit: (data) => {
    set(
      produce<ProduceType>((draft) => {
        const contactToEdit = draft.contacts.get(data.id);
        contactToEdit &&
          draft.contacts.set(data.id, { ...contactToEdit, ...data });
      }),
    );
  },
  remove: (id) => {
    set(
      produce<ProduceType>((draft) => {
        draft.contacts.delete(id);
      }),
    );
  },
}));

export { useContactStore };
