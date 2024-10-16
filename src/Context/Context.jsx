import React from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [listProducts, setListProducts] = React.useState([]);
  
  const getProducts = async () => {
    try {
      const request = await fetch(
        "https://ranekapi.origamid.dev/json/api/produto"
      );
      const response = await request.json();
      setListProducts(response);
    } catch (e) {
      console.log("error:", e);
    }
  };

  React.useEffect(() => {
    getProducts();
  },[]);

  return (
    <Context.Provider 
      value={{
        listProducts,
      }}>
        {children}
    </Context.Provider>
  )
}

export { Provider, Context };