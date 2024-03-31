import React from "react";
import dateFormat from "dateformat";
import Loading from "./Loading";

const LoadComments = props => {
  if (props.commentIsLoading) {
    return <Loading />;
  } else {
    return (
      props.comments.map((cmnt) => {
        return (
          <div key={cmnt.id}>
            <h3>{cmnt.author}</h3>
            <p>Ratting: {cmnt.rating}</p>
            <p>{cmnt.comment}</p>
            <p>{dateFormat(cmnt.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
          </div>
        )
      })
    )
  }
}

export default LoadComments