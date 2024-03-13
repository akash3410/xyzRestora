import React from 'react'

const Loading = () => {
  return (
    <div className='col-12 p-5'>
      <span className="fa fa-spinner fa-flip fa-3x fa-fw fa-pulse text-black-50'" style={{ margin: "20px auto" }}></span>
      <h4 className='text-black-50'>Please wait a while....</h4>
    </div>

  )
}

export default Loading