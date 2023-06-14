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
      if (modal) {
        modalContainerElement.style.position = 'absolute';
        modalContainerElement.style.top = '0';
        modalContainerElement.style.background = 'rgba(0, 0, 0, 0.6)';
        modalContainerElement.style.backdropFilter = 'blur(3.5px)';
        modalContainerElement.style.width = '100%';
        modalContainerElement.style.height = '100%';
      } else {
        modalContainerElement.style.position = 'initial';
        modalContainerElement.style.position = 'initial';
        modalContainerElement.style.top = 'initial';
        modalContainerElement.style.background = 'initial';
        modalContainerElement.style.backdropFilter = 'initial';
        modalContainerElement.style.width = 'initial';
        modalContainerElement.style.height = 'initial';
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
