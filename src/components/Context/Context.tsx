import  { createContext} from 'react';

type ContextType = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const SideBarContext = createContext<ContextType | undefined>(undefined);










