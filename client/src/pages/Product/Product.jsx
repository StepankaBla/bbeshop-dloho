import React from "react";
import { useState } from "react";
import "./Product.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onMouseEnter={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onPointerOver={(e) => setSelectedImg("img2")}
              />
            </div>

            <div className="mainImg">
              <TransformWrapper>
                <TransformComponent>
                  <img
                    src={
                      process.env.REACT_APP_UPLOAD_URL +
                      data?.attributes[selectedImg]?.data?.attributes?.url
                    }
                    alt="test"
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>
          </div>
          <div className="right">
            <h2>{data?.attributes?.title}</h2>
            <p>{data?.attributes?.desc}</p>
            <span>{data?.attributes?.size} Cm</span>
            <span className="price">{data?.attributes?.price} Czk</span>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev == 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <div className="pickFrame">
              <p>Pick your frame: </p>
              <img
                src="/img/white.avif"
                alt="white frame"
                onClick={(e) => setSelectedImg("white")}
              />
              <img
                src="/img/black.avif"
                alt="black frame"
                onClick={(e) => setSelectedImg("black")}
              />
              <img
                src="/img/brown.avif"
                alt="brown frame"
                onClick={(e) => setSelectedImg("wooden")}
              />


              <div><span onClick={(e) => setSelectedImg("img")} >-none-</span></div>

            </div>
            <div className="addCont">
              <button
                className="add"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: selectedImg,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity,
                    })
                  )
                }
              >
                <AiOutlineShoppingCart /> ADD TO CARD
              </button>
            </div>

            <div className="link">
              <MdFavoriteBorder
                className="favorite"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity,
                    })
                  )
                }
              />{" "}
              ADD TO WISHLIST
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
