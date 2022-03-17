import { useState} from 'react';

const Policy = (props) => {
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const [showMore, setShowMore] = useState(false)

  var handleClick = e => {
    setShowMore(!showMore)
  }

  return (
    <div className='policy'>
      <h1>Policy ID: {props.id}</h1>
      <button onClick={handleClick}>Additional Details</button>
      {showMore && (<div className='additional-details'>
        <h2>Policy Details</h2>
          <span>Policy Creation Month: {props.month},</span>
          <span> Policy Creation Year: {props.year}</span>
        <h2>Driver Details</h2>
          <span>Age: {props.driver_age},</span>
          <span> Marital Status: {props.driver_marital}</span>
          <br></br>
          <span>Employment Status: {props.driver_employment},</span>
          <span> Location: {props.driver_location}</span>
        <h2>Car Details</h2>
          <span>Model: {props.vehicle_model},</span>
          <span> Age: {props.vehicle_age}</span>
        <h2>Claims Details</h2>
          <span>Insurance Premiums: {dollarUS.format(props.insurance_premium)},</span>
          <span> Claims: {props.insurance_claims},</span>
          <span> Losses: {dollarUS.format(props.insurance_losses)}</span>
      </div>
      )}
    </div>
  )
}

export default Policy;