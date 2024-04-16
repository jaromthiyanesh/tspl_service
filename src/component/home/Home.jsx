import React from 'react'
import { Jobs } from './Jobs'
import { useState } from 'react'
import Primejob from './PrimeJob'
import Form from './Form'



function Joint({login}) {
    
   
    const [selected, setSelected] = useState(null)

    function handleView(job){
        setSelected(job)
    }

    function handleBack(){
        setSelected(null)
    }

   

    return (
        <div>

             {selected ?
                (<Form selected={selected} data={Jobs} onBack={handleBack} />
                ) : (
                    <Primejob data={Jobs} onView={handleView} login={login}/>)}

        </div>
    )
}

export default Joint