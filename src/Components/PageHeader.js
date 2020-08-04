import React from 'react';

export default function PageHeader(props) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10%', minHeight: '50px', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <div className="my-experience-label">
                {props.title}
            </div>
        </div>
    )
}