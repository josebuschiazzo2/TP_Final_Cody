import "./card.css";
import React from 'react'

function Card(props) {
  return (
    <div >
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card ">
          <img class="card-img-top" src={props.cardImg} alt="" />
          <div class="card-body">
            <div class="badges">
              <span class="badge badge-success">{props.cardBadge}</span>
            </div>
            <h5 class="card-title" id="card1">{props.cardTitle}   </h5>
            <p class="card-text"> {props.cardText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
