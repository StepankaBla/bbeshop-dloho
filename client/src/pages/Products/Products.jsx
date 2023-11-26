import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

export const Products = () => {
  const catId = parseInt(useParams().id);
  const [sort, setSort] = useState("asc");

  const { data, loading, error } = useFetch(
    `/?[[categories][id][$eq]=${catId}`
  );
  console.log(data);

  return (
    <div className="products">
       <div className="bannerProduct">
        <h2>Choose the best creations for you!</h2>
        <span>guaranteed quality</span>
      </div>
      <div className="filterItem">
        <MDBDropdown group className="shadow-0">
          <MDBDropdownToggle color="light">Sort by</MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem link>
              {" "}
              <div className="inputItem">
                <input
                  type="checkbox"
                  id="asc"
                  value="asc"
                  name="price"
                  onChange={(e) => setSort("asc")}
                />
                <label htmlFor="asc"> Lowest price</label>
              </div>
            </MDBDropdownItem>
            <MDBDropdownItem link>
              <div className="inputItem">
                <input
                  type="checkbox"
                  id="desc"
                  value="desc"
                  name="price"
                  onChange={(e) => setSort("desc")}
                />
                <label htmlFor="desc"> Highest price</label>
              </div>
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </div>

      <List sort={sort} />
    </div>
  );
};

export default Products;
