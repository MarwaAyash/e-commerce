import React from 'react'

const CollectionPage = () => {
  return (
    <div>CollectionPage</div>
  )
}

export default CollectionPage
// import React from "react";
// import { useDispatch } from "react-redux";

// const CollectionPage = () => {
//     const itemId = useParams();
//     const [singleItem, setSingleItem] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const dispatch = useDispatch();
    

//     useEffect(() => {
//         fetch(`/items/${itemId.id}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application.json",
//         },
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             setSingleItem(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//     }, []);

//     if (singleItem === null) {
//         return (
//         <>
//             <Div></Div>
//         </>
//         );
//     }

//     if (singleItem !== null) {
//         const item = singleItem.data;

//         const handleAddItemToServer = () => {
//         fetch("/cart", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(item),
//         }).then(() => dispatch(addToCart(item)));
//         };
//         return (
//         <>
//             <Div>
//             <Wrapper>
//                 <Main>
//                 <ProductImage src={item.imageSrc} />
//                 <ProductDetailsWrapper>
//                     <Header>
//                     <ProductName>{item.name}</ProductName>
//                     <SoldBy>Sold by: {item.companyId}</SoldBy>
//                     </Header>
//                     <PriceWrapper>
//                     <Price>Price:</Price>
//                     <Amount>{item.price}</Amount>
//                     </PriceWrapper>
//                     <StockWrapper>
//                     {item.numInStock === 0 && <NoStock>Unavailable</NoStock>}
//                     {item.numInStock < 5 && item.numInStock > 0 && (
//                         <LowStock>Low stock</LowStock>
//                     )}
//                     {item.numInStock >= 5 && <HighStock>In stock</HighStock>}
//                     </StockWrapper>
//                     <DetailedInfoWrapper>
//                     <LeftDetailedInfoWrapper>
//                         <CategoryName>Body location:</CategoryName>
//                         <CategoryName>Category:</CategoryName>
//                         <CategoryName>Product ID:</CategoryName>
//                     </LeftDetailedInfoWrapper>
//                     <RightDetailedInfoWrapper>
//                         <AttributeName>{item.body_location}</AttributeName>
//                         <AttributeName>{item.category}</AttributeName>
//                         <AttributeName>{item._id}</AttributeName>
//                     </RightDetailedInfoWrapper>
//                     </DetailedInfoWrapper>
//                 </ProductDetailsWrapper>
//                 </Main>
//                 <AddToCart
//                 onClick={() => {
//                     setShowModal(true);
//                     handleAddItemToServer();
//                 }}
//                 >
//                 Add to cart
//                 </AddToCart>
//                 <ModalAddedToCart
//                 showModal={showModal}
//                 setShowModal={setShowModal}
//                 />
//             </Wrapper>
//             </Div>
//         </>
//         );
//   }
// };

// const Div = styled.div`
//     background-color: #eaedec;
//     min-height: calc(100vh - 75px - 50px);
// `;

// const Wrapper = styled.div`
//     display: flex;
//     position: absolute;
//     top: 45%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     background-color: white;
//     max-width: 1150px;
//     min-width: 900px;
//     padding: 25px;
// `;

// const Main = styled.div`
//     display: flex;
//     justify-content: center;
// `;

// const ProductImage = styled.img`
//     height: 300px;
//     width: 300px;
//     margin-right: 20px;
// `;

// const ProductDetailsWrapper = styled.div``;

// const Header = styled.div`
//     border-bottom: 2px solid #eaedec;
// `;

// const ProductName = styled.div`
//     font-size: 25pt;
//     font-weight: bold;
// `;

// const SoldBy = styled.div`
//     font-size: 10pt;
//     color: grey;
// `;

// const PriceWrapper = styled.div`
//     display: flex;
//     font-size: 16pt;
//     margin-top: 25px;
// `;

// const Price = styled.div`
//     margin-right: 10px;
// `;

// const Amount = styled.div`
//     font-weight: bold;
// `;

// const StockWrapper = styled.div`
//     display: flex;
// `;

// const NoStock = styled.div`
//     color: red;
// `;

// const LowStock = styled.div`
//     color: orange;
// `;

// const HighStock = styled.div`
//     color: green;
// `;

// const DetailedInfoWrapper = styled.div`
//     display: flex;
//     font-size: 11pt;
//     margin-top: 25px;
// `;

// const LeftDetailedInfoWrapper = styled.div`
//     margin-right: 25px;
// `;

// const RightDetailedInfoWrapper = styled.div`
//     font-weight: bold;
// `;

// const CategoryName = styled.div``;

// const AttributeName = styled.div``;

// const AddToCart = styled.button`
//     padding: 10px 0px;
//     font-family: "Poppins", sans-serif;
//     color: white;
//     background-color: yellowgreen;
//     border-radius: 5px;
//     border: none;
//     box-shadow: 2px 2px 10px rgba(161, 161, 161, 0.3);
//     cursor: pointer;
//     width: 250px;
//     text-align: center;
//     margin-top: 25px;
// `;

// export default CollectionPage;