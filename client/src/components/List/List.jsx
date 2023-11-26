import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from '../../hooks/useFetch'
import SyncLoader from "react-spinners/SyncLoader";

const List = ({catId, sort}) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[categories][id]=${catId}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ?  <SyncLoader  color={'#c9a0a8'} loading={loading} size={10} />
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
