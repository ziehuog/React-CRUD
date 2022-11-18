// import { createContext, useEffect, useState } from "react";
// import { data } from "../utils/http";

// export const dataContext = createContext();

// export const DataProvider = ({ children }) => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//       data.get("/users").then((res) => {
//         setUsers(res.data);
//       });
//     }, []);

//   return (
//     <dataContext.Provider
//       value={{
//         users
//       }}
//     >
//       {children}
//     </dataContext.Provider>
//   );
// };
