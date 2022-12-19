import { createContext, useState } from "react";

interface IDrawerContext {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const DrawerContext = createContext<IDrawerContext>({
  isOpen: false,
  open: () => {
    return;
  },
  close: () => {
    return;
  },
  toggle: () => {
    return;
  },
});

interface IDrawerProvider {
  children: any; //JSX.Element | JSX.Element[];
}

export const DrawerProvider: React.FC<IDrawerProvider> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        open: openHandler,
        close: closeHandler,
        toggle: toggleHandler,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
