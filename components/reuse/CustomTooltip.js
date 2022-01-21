import React from 'react';

const CustomTooltip = ({ active, payload }) => {

    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip backdrop-blur-sm shadow-sm bg-slate-50 p-2">
                <p className="flex gap-3">
                    <span>Repository : </span>
                    <span className="font-semibold">{payload[0].payload.name}</span>
                </p>

                <p className="flex gap-3">
                    <span>Star Count : </span>
                    <span className="font-semibold">{payload[0].value}</span>
                </p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;
