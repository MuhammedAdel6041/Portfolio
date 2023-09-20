import React, { useState } from 'react'

export default function Contact() {
 
  let [inputValue, setInputValue] = useState('');
  const handleKeyDown = () => {
    const label = document.getElementById('userLabel');
    if (inputValue) {
      label.classList.add('top');
    } else {
      label.classList.remove('top');
    }
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  //#################################
  let [Age, setInputAge] = useState('');
  let handleKeyDownAge = () => {
    const label = document.getElementById('AgeLabel');
    if (Age) {
      label.classList.add('top');
    } else {
      label.classList.remove('top');
    }
  };
  const handleAgeChange = (event) => {
    setInputAge(event.target.value);
  };
  // ##########################################
  const [Email, setInputEmail] = useState('');
  let handleKeyDownEmail = () => {
    const label = document.getElementById('EmailLabel');
    if (Email) {
      label.classList.add('top');
    } else {
      label.classList.remove('top');
    }
  };
  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  };
  // ################################################
  const [password, setInputpassword] = useState('');
  let handleKeyDownpassword = () => {
    const label = document.getElementById('PasswordLabel');
    if (password) {
      label.classList.add('top');
    } else {
      label.classList.remove('top');
    }
  };
  const handlePasswordChange = (event) => {
    setInputpassword(event.target.value);
  };
  return (
    < >
      <section>
        <div className="content-info"  >
          <div className="container">
            <div className="portofolio pb-4">
              <h1>CONTACT COMPONENT</h1>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="line me-3 bg-dark" />
                <i className="fa-solid fa-star" />
                <div className="line ms-3 bg-dark" />
              </div>
            </div>
            <div className="form_information  w-50 mx-auto  ">
              <div className="item">
                <label className={inputValue ? 'top' : ''} id='userLabel' htmlFor="UserName">UserName :</label>
                <input
                  type="text"
                  id='UserName'
                  placeholder='UserName'
                  className='form-control'
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <div className="item">
                <label className={Age ? 'top' : ''} id='AgeLabel' htmlFor="UserAge">UserAge :</label>
                <input type="number" id='UserAge' placeholder='UserAge' className='form-control' value={Age}
                  onChange={handleAgeChange}
                  onKeyDown={handleKeyDownAge} />
              </div>

              <div className="item">
                <label className={Email ? 'top' : ''} id='EmailLabel' htmlFor="UserEmail">UserEmail :</label>
                <input type="email" id='UserEmail' placeholder='UserEmail' className='form-control' value={Email}
                  onChange={handleEmailChange}
                  onKeyDown={handleKeyDownEmail} />
              </div>

              <div className="item">
                <label className={password   ? 'top' : ''} id='PasswordLabel' htmlFor="UserPassword">UserPassword :</label>
                <input type="password" id='UserPassword' placeholder='UserPassword' className='form-control' value={password  }
                  onChange={handlePasswordChange}
                  onKeyDown={handleKeyDownpassword} />
              </div>


              <button className='btn btn-success mb-4 '>sendMassage</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
