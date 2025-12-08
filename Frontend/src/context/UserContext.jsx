import { createContext, useState } from "react";
// 1. Create Context
export const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState("Rishav Kumar");
  return (
    // 2. Provide the value
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}