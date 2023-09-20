import React from 'react'

export default function Footer() {
  return (
    < >
      <footer className="bg-danger ">
        <div className="Upper-Footer py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="content">
                  <h3>location</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="content">
                  <h3>AROUND THE WEB</h3>
                  <div className="social-media ">
                    <div className="icons"><i className="fa-brands fa-facebook-f" /></div>
                    <div className="icons"> <i className="fa-brands fa-twitter"></i></div>
                    <div className="icons"> <i className="fa-brands fa-linkedin"></i></div>
                    <div className="icons"><i className='fa-solid fa-globe'></i></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="content">
                  <h3>ABOUT FREELANCER</h3>
                  <p>Freelance is a free to use, licensed Bootstrap theme created <br /> by Route</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-Footer py-3">
          <h2>Copyright © Your Website 2021</h2>
        </div>
      </footer>
    </>
  )
}
