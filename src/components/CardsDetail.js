import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";

const CardsDetails = () => {

  const { id } = useParams();
  // console.log(id)

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const history = useNavigate();
  const dispatch = useDispatch();

  // Add data
  const send = (e) => {
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  // Remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  const data = getdata.filter((e) => e.id == id);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
        <section className="container mt-3">
          <div className="itemsdetails">
            {data.map((el) => {
              return (
                <>
                  <div className="items_img">
                    <img src={el.imgdata} />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong>: {el.rname}
                          </p>
                          <p>
                            <strong>Price</strong>: ₨ {el.price}
                          </p>
                          <p>
                            <strong>Dishes</strong>: {el.address}
                          </p>
                          <p>
                            <strong>Total</strong>: ₨ {el.price * el.qnty}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={el.qnty <= 1 ? ()=>dlt(el.id) : () => remove(el)}
                            >
                              -
                            </span>
                            <span style={{ fontSize: 24 }}>{el.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(el)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating: </strong>
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {el.rating} ★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review: </strong>
                            <span>{el.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove: </strong>
                            <span>
                              <i
                                class="fa-solid fa-trash"
                                onClick={() => dlt(el.id)}
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
