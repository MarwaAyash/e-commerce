import React, {useEffect, useState} from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const AllStore = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/get-items")
      .then((res) => res.json())
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  return (
    <Div>
      <ul className="items-list">
        {items
          .sort((a, b) => {
            return a.name > b.name;
          })
          .map((item) => {
            return (
              <li className="item-name">
                   {/* <StyledLinks to={`/items/${item.id}`}>{item.name}</StyledLinks> */}
                <Link to={`/products/${item._id}`}>{item.name}
                <img src={item.imageSrc} alt={"img of "+item.name}/>
                </Link>
                <p>Price: {item.price}</p><p>{item.body_location}</p><p>Category: {item.category}</p><p>Number In Stock: {item.numInStock}</p>


              </li>
            );
          })}
      </ul>
    </Div>
  );
};



const Div = Styled.div`
padding: 3rem;
display: flex;
justify-content: center;
/* flex-direction: column; */
background: white;
.brands-list {
    column-count: 3;
}
@media screen and ( max-width: 1080px) {
    .brands-list {
    column-count: 2;
}
}
@media screen and (max-width: 820px) {
    .brands-list {
    column-count: 1;
}
}
.brand-name {
    color: white;
    font-size: 1.5em;
    font-weight: 700;
    a {
        color: black;
        &:hover {
            text-decoration: underline;
        }
    }
}
`;

export default AllStore;