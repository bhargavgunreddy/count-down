import React from 'react';
import {useEffect} from 'react'
const axios = require('axios').default;
import Async,{ useAsync } from 'react-async';

const Weather: React.FC = () => {

	let axResp = {};


	const loadData =useEffect(()=>{ axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    console.log(response);
		axResp = response;
		return response;
  })
  .catch(function (error) {
    return error;
  })
  .then(function () {
    // always executed
  });
},[]);

const {data,error,isLoading} = useAsync({promiseFn: loadData});


useEffect()=>{
	if(isLoading) return 'Loading...'
	if(error) return 'Something went wrong'
	if(data){
  return (

    <div className="weather-app">
			<section className= "weather-heading">
				<img src = "./pulic/logo192.png"/>
					<h3> Weather now ,{renderFn()} </h3>

				<img src = "./pulic/logo192.png"/>
			</section>
			<section className= "weather-cotent">
			</section>
    </div>
  );
}
}

return{
	<div>
	{renderFn()}</div>
}

}
export default Weather;
