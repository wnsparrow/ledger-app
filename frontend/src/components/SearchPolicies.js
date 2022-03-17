import { useState } from 'react'

const SearchPolicies = (props) => {
  const [search, setSearch] = useState("")

  return (
    <div className='searchPage'>
      <input placeholder="Search by ID" onChange={e => setSearch(e.target.value)} />
      {
        props.data.filter(policy => {
          if (search === '') {
            return policy;
          } else if (policy.id.toString().includes(search)) {
            return policy;
          }
        }).map((item, index) => (
          <div className="card" key={index}>
            <div>Policy ID: {item.id}</div>
            <div>Policy Year: {item.year}</div>
            <div>Policy Month: {item.month}</div>
            <div>Driver Age: {item.driver_age}</div>
            <div>Gender: {item.driver_gender}</div>
            <div>Employment Status: {item.driver_employment}</div>
            <div>Marital Status: {item.driver_marital}</div>
            <div>Location: {item.driver_location}</div>
            <div>Vehicle Age: {item.vehicle_age}</div>
            <div>Model: {item.vehicle_model}</div>
            <div>Insurance Premium: {item.insurance_premium}</div>
            <div>Insurance Claims: {item.insurance_claims}</div>
            <div>Insurance LossesL {item.insurance_losses}</div>
          </div>
        ))
      }
    </div>
  )

}

export default SearchPolicies
