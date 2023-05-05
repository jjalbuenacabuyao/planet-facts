import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface ActiveTabContextProp {
  activeTab: "Overview" | "Internal" | "Geology";
  setActiveTab: Dispatch<SetStateAction<string>>;
}
 
const ActiveTabContext = createContext<ActiveTabContextProp>({
  activeTab: "Overview",
  setActiveTab: () => {}
});

export const useActiveTabContext = () => {
  const context = useContext(ActiveTabContext);
  return context;
}

export default ActiveTabContext;