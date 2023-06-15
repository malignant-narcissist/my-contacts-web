import { JSX, createContext } from 'preact';
import React, { createPortal } from 'preact/compat';
import { useContext, useEffect, useMemo, useState } from 'preact/hooks';

interface ModalContextData {
  open(data: JSX.Element): void;
  close(): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const modalContainerElement = document.getElementById('modal-container');
  const [modal, setModal] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (modalContainerElement?.style) {
      const modalContainerElementEntries: [
        keyof CSSStyleDeclaration,
        string,
      ][] = [
        ['position', 'absolute'],
        ['top', '0'],
        ['background', 'rgba(0, 0, 0, 0.6)'],
        ['backdropFilter', 'blur(3.5px)'],
        ['width', '100%'],
        ['height', '100%'],
      ];

      const modalContainerElementStyle =
        modalContainerElement.style as {} as Record<
          keyof CSSStyleDeclaration,
          string
        >;

      if (modal) {
        modalContainerElementEntries.forEach((item) => {
          modalContainerElementStyle[item[0]] = item[1];
        });
      } else {
        modalContainerElementEntries.forEach(([key]) => {
          modalContainerElementStyle[key] = 'initial';
        });
      }
    }
  }, [modal]);

  const providerValues = useMemo<ModalContextData>(
    () => ({
      open(data: JSX.Element) {
        setModal(data);
      },
      close() {
        setModal(null);
      },
    }),
    [],
  );

  return (
    <ModalContext.Provider value={providerValues}>
      {children}
      {modalContainerElement &&
        modal &&
        createPortal(modal, modalContainerElement)}
    </ModalContext.Provider>
  );
};

const useModalContainer = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModalContainer must be used within a ModalProvider');
  }

  return context;
};

export { ModalProvider, useModalContainer };
