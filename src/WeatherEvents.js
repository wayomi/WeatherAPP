import React, { Component } from 'react'
import events from './events.json'
import './WeatherEvents.css'

export default class WeatherEvents extends Component { 
    
   
    render()            
   
        {

        return (
           
            <div>
                <h1 className="Heading">Events </h1>
                <table >
                    <thead border="1">
                        <tr>
                            <th>#</th>
                            <th>Name of the Event</th>
                            <th>Date</th>
                            <th>City</th>                            
                        </tr>
                    </thead>
                    <tbody border="1">
                        {events.data.filter((event) =>
                            event.start.displaylocal <= "Mon 1 Nov 2021" ).map((eve) =>                    
                        <tr>                            
                            <td>{eve.slug}</td>
                            <td>{eve.summary}</td>
                            <td>{eve.start.displaylocal}</td>
                            {/*<td>{eve.areas.map((city,index) =>
                                <p key={ index}>{ city.title}</p>
                            )}
                            </td>  
                            // This line of code should work to get the city name from the json file. 
                            As it is in a array have to use map() function. But in here it didn't work. That's why I comment that.
                            because of that error I couldn't acceess the city name, So I add another .js file to
                            work with weather API to get weather to particular city and it works.
                            */}
                             
                        </tr>                        
                        )
                        }
                        
                    </tbody>
                </table>
                <h5 className="top">By Wayomi Jayantha</h5>
            </div>
        )
    }
}
