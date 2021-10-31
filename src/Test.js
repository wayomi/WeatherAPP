import React, { Component } from 'react'
import events from './events.json'

export class Test extends Component {         
   
    render() {       

        return (
            <div>                              
                {events.data.filter((event) =>
                    event.start.displaylocal > "Tue 2 Nov 2021").map((eve) =>
                    <div>
                        <h4>{eve.slug}</h4>
                            <p>{eve.summary}</p>
                            <div>
                        {eve.areas.map((city) =>
                             <p >{ city.title}</p>                                
                        )}
                            </div>
                            </div> 
                            )                       
                        }
                       
                   
            </div>
        )
    }
}
