import dateFormat from "dateformat";
const LoadComments = ({ comments }) => {
  const comment = comments.map((cmnt) => {
    return (
      <div key={cmnt.id}>
        <h3>{cmnt.author}</h3>
        <p>Ratting: {cmnt.rating}*</p>
        <p>{cmnt.comment}</p>
        <p>{dateFormat(cmnt.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
        <hr />
      </div>
    )
  })
  return (
    <div>{comment}</div>
  )
}

export default LoadComments