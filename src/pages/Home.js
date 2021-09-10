import React, {useState} from 'react'
import {useLazyQuery} from '@apollo/client'
import { GET_WEATHER } from "../graphql/Queries";

function Home() {

    const [citySerched, setCitySerched] = useState('');

    const [getWeather, { data, error}] = useLazyQuery(GET_WEATHER, {
        variables: {name: citySerched}
    })

    if(error) {
        return <h1> Error Found </h1>;
    }

    if(data){
        console.log(data);
    }


    return (
        <div className="home">
            <h1>Search For Weather</h1>
            <input type="text" placeholder="City Name..." onChange={(event) =>{setCitySerched(event.target.value)}}/>
            <button onClick={() => getWeather()} className="">Search</button>
            <div className="weather">
                {data && (
                    <>
                    <h1>sfd</h1>
                    <h1> Weather</h1>
                    <h1> Temperature</h1>
                    <h1> Wind Speed</h1>
                    </>
                )}
            </div>
        </div>
    )
}

export default Home
