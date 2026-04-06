import { useState, type ReactNode } from "react";
import { SideBarContext } from "./context";


export function ContextProvider({ children }: { children: ReactNode }){

    const [open,setOpen] = useState<boolean>(false);

    const contextValue={open,setOpen}

    return (
        <SideBarContext.Provider value={contextValue}>
            {children}
        </SideBarContext.Provider>
    )
}