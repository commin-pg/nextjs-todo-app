import React from 'react'

function appleId(req) {

    console.log(req)
    return (
        <div>
            
            Apple
            {
                JSON.stringify(req)
            }

        </div>
    )
}

export default appleId