import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";
// import "../sellingOffer/sellingOffer.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart";
import { useNavigate } from "react-router-dom";
import GroceryCatlog from "../grocery/GroceryCatlog";

const Categories = () => {
  const [catagorylist, setCategorylist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const Navigate = useNavigate();

  const handleAddToCart = (data) => {
    if (localStorage.getItem("access_token") !== null) {
      dispatch(addToCart(data));
      Navigate("/mycart");
    } else {
      Navigate("/login");
    }
  };

  useEffect(() => {
    axios
      .get("https://uat.ordering-farmshop.ekbana.net/api/v4/category", {
        headers: {
          "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
        },
      })
      .then((response) => {
        console.log(response.data.data, "catagory");
        setCategorylist(response.data.data);
        // console.log(catagorylist, "nepal");
        setIsLoading(!isLoading);
      })
      .catch((error) => {
        console.log(error, "faileddd");
      });
  }, [setCategorylist]);

  return (
    <>
      {isLoading ? (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "32px",
          }}
        >
          Loading....
        </p>
      ) : (
        <div className="category-card">
          <div className="allcategorylist">
            <GroceryCatlog />
          </div>
          <div className="category-containeror">
            {catagorylist.slice(0, 9).map((data, index) => {
              return (
                <>
                  <div class="col-md-4 top_brand_left product-cartt">
                    <div class="hover14 column">
                      <div class="agile_top_brand_left_grid">
                        <div class="agile_top_brand_left_grid_pos">
                          <img
                            src="assets/images/offer.png"
                            alt=" "
                            class="img-responsive"
                          />
                        </div>
                        <div class="product-Desc">
                          <img
                            src={data.backgroundImage}
                            // width="65rem"
                            // height="35rem"

                            className="category-image"
                          />
                          <p>{data.title}</p>
                          {/* <p>ProductId: {data.id}</p> */}

                          <p>ProductCount: {data.productCount}</p>
                          <div class="snipcart-details top_brand_home_details">
                            <input
                              onClick={() => handleAddToCart(data)}
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              class="button"
                            />
                          </div>
                        </div>

                        {/* <div class="agile_top_brand_left_grid1"></div> */}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
