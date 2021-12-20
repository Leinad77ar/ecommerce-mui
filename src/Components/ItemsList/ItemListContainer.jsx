import { useEffect, useState } from "react";
import ItemList from "./ItemList";
const ItemListContainer = () => {
  const [loadingItems, setLoadingItems] = useState(true);
  useEffect(() => {
    setTimeout(setLoadingItems(false), 2000);
  }, [loadingItems]);
  return <>{loadingItems ? <h1>Cargando...</h1> : <ItemList />}</>;
};

export default ItemListContainer;
