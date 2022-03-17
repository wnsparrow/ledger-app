import React from 'react'
import { useState, useEffect } from 'react'
import Policy from './Policy'

const Home = (props) => {
//   const [policies, setData] = useState([])

//   useEffect(() => {
//     getData();

//     async function getData() {
//       const response = await fetch('http://127.0.0.1:8000/api/policies/');
//       const data = await response.json();

//       setData(data.results);
//     }
//   }, [])

  return (
    <div>
      <div>
       {props.data.map(item => (
        <div key={item.id}>
          <Policy
            id={item.id}
            month={item.month}
            year={item.year}
            driver_age={item.driver_age}
            driver_gender={item.driver_gender}
            driver_employment={item.driver_employment}
            driver_marital={item.driver_marital}
            driver_location={item.driver_location}
            vehicle_age={item.vehicle_age}
            vehicle_model={item.vehicle_model}
            insurance_premium={item.insurance_premium}
            insurance_claims={item.insurance_claims}
            insurance_losses={item.insurance_losses} />
        </div>
        ))}
      </div>
    </div>
  )

  // return (
  //   <div>
  //     Hi
  //   </div>
  // )
}

export default Home

