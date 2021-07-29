import React from 'react';

export function Divider(props) {

    const { color } = props;

    return (
        <div className="custom-shape-divider-bottom">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" style={{ fill: color }}></path>
            </svg>
        </div>
    )
}

export function AltDivider(props) {

    const { color } = props;

    return (
        <div className="custom-shape-divider-bottom-alt">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" style={{ fill: color }}></path>
            </svg>
        </div>
    )
}