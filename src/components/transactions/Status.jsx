import React from 'react';

function Status({status}) {
    switch (status) {
        case "PENDING":
            return (
                <div className="bg-warning text-light rounded">
                    {status}
                </div>
            )
        case "WAITING":
            return (
                <div className="bg-warning text-light rounded">
                    {status}
                </div>
            )
        case "PROCESSING":
            return (
                <div className="bg-info text-light rounded">
                    {status}
                </div>
            )
        case "COMPLETED":
            return (
                <div className="bg-success text-light rounded">
                    {status}
                </div>
            )

        default:
            return (
                <div className="bg-danger text-light rounded">
                    {status}
                </div>
            )
    }
}

export default Status;