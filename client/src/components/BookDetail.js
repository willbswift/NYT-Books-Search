import React from "react";

function BookDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Authors: {props.authors}</h3>
      <h3>Description: {props.description}</h3>
      <h3>Image: {props.image}</h3>
      <h3>Link: {props.link}</h3>
    </div>
  );
}

export default BookDetail;
