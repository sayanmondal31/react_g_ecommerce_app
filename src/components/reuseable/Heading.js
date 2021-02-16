import React from 'react'

export default function Heading({title}) {
    return (
        <div>
            <div className="row">
                <div className="col text-center mb-4"> {/*mb = margin bottom */}
                    <h1 className="display-3">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    )
}
