import { useState, type ReactNode } from "react";
import { SideBarContext } from "./Context";

interface SideBarContextType {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export function ContextProvider({ children }: { children: ReactNode }){
    const [open, setOpen] = useState<boolean>(false);

    const contextValue: SideBarContextType = { open, setOpen };

    return (
        <SideBarContext.Provider value={contextValue}>
            {children}
        </SideBarContext.Provider>
    )
}