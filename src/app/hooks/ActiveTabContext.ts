import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface activeTabContext {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}
 
const ActiveTabContext = createContext<activeTabContext>({
  activeTab: "Overview",
  setActiveTab: () => {}
});

export const useActiveTabContext = () => {
  const context = useContext(ActiveTabContext);
  return context;
}

export default ActiveTabContext;