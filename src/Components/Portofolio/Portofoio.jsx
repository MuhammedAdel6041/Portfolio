import React from 'react'
import img_1 from "../../image/poert1.png"
import img_2 from "../../image/port2.png"
import img_3 from "../../image/port3.png"
export default function Portofoio() {


  function call(event) {

    var boxItem = document.querySelector(".Model-deteils");
    var modelBox = document.querySelector(".img-Model");
    modelBox.style.display = 'flex';
    var imgSrc = event.currentTarget.querySelector('img').getAttribute("src");
    boxItem.style.backgroundImage = `url(${imgSrc})`;
    modelBox.addEventListener('click', function () {
      modelBox.style.display = 'none';
  })
  }

  // function call() {
  //   var imgModel = Array.from(document.querySelectorAll(".contae_info  img"));//Array of image  all image in container
  //   var boxItem = document.querySelector(".Model-deteils");// container of background image and icons
  //   var modelBox = document.querySelector(".img-Model");//container of background with opacity and all model shape in site
  //   console.log(imgModel);
  //   for (var count = 0; count < imgModel.length; count++) {
  //     console.log("befor event");
  //     imgModel[count].addEventListener("click", function (eventInfo) {
  //       console.log("after event");
  //       modelBox.style.display = 'flex';
  //       var imgSrc = eventInfo.target.getAttribute("src");
  //       boxItem.style.backgroundImage = `url(${imgSrc})`

  //     })
  //   }
  // }

  return (
    <>
      <section>
        <div className="content-info"  >
          <div className="container">
            <div className="portofolio pb-4">
              <h1>PORTFOLIO COMPONENT</h1>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="line me-3 bg-dark" />
                <i className="fa-solid fa-star" />
                <div className="line ms-3 bg-dark" />
              </div>
            </div>
            <div className="container">
              <div className="row g-5 mb-4 ">
                <div className="col-md-4 " >
                  <div className="contae_info  rounded-3" onClick={call} >
                    <img src={img_1} alt="" className=' w-100 rounded-3 ' />
                    <div className="rounded-3 layout d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="contae_info   rounded-3" onClick={call}>
                    <img src={img_2} alt="" className=' w-100 rounded-3 ' />
                    <div className="rounded-3 layout d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="contae_info  rounded-3" onClick={call}>
                    <img src={img_3} alt="" className=' w-100 rounded-3 ' />
                    <div className="rounded-3 layout d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                  </div>
                </div>
                <div className="col-md-4 " >
                  <div className="contae_info  rounded-3" onClick={call} >
                    <img src={img_1} alt="" className=' w-100 rounded-3 ' />
                    <div className="rounded-3 layout d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="contae_info   rounded-3" onClick={call}>
                    <img src={img_2} alt="" className=' w-100 rounded-3 ' />
                    <div className="rounded-3 layout d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="contae_info  rounded-3" onClick={call}>
                    <img src={img_3} alt="" className=' w-100 rounded-3 ' />
                    <div className="rounded-3 layout d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="img-Model">
          <div className="Model-deteils">


          </div>
        </div>

      </section>
    </>
  )
}
