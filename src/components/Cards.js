import React, { useState } from "react";
import Cardsdata from "./CardsData";
import "./style.css";
import { useDispatch } from "react-redux";
import {ADD} from "../redux/actions/action"

const Cards = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e))
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <>
              <div
                className="card mx-2 mt-4 card_style"
                style={{ width: "22rem", border: "none" }}
              >
                <img
                  src={element.imgdata}
                  className="card-img-top mt-3"
                  style={{ height: "16rem" }}
                />
                <div className="card-body">
                  <h5 class="card-title">{element.rname}</h5>
                  <p className="card-text">Price : ₨ {element.price}</p>
                  <div className="button_div d-flex justify-content-center">
                    <button
                      className="col-lg-12 btn btn-primary"
                      onClick={() => send(element)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
