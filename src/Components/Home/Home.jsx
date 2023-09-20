import React from 'react'
import photo from '../../image/avataaars.svg'
export default function Home() {
  return (
    < >
      <div className="home d-flex justify-content-center align-items-center main-Color vh-100">
        <div className="content text-center">
          <img src={photo} className='w-75 my-4' alt="" />
          <div className="info my-2 text-center text-white">
            <h3>START FRAMEWORK</h3>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line me-3" />
              <i className="fa-solid fa-star" />
              <div className="line ms-3" />
            </div>
            <small>Graphic Artist - Web Designer - Illustrator</small>
          </div>
        </div>
      </div>
    </>
  )
}
