import { useState } from "react";


function Node({node, xScale, colorScale, boundsHeight}) {
    const [isHovered, setIsHovered] = useState(false);


    function handleMouseEnter(e) {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <>
        <circle
            key={node.id}
            cx={xScale(node.year)}
            cy={boundsHeight}
            r={8}
            fill={isHovered ? 'purple' : colorScale(node.group)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
        {isHovered && (
            <text
                x={xScale(node.year)}
                y={boundsHeight+20}
                textAnchor="middle"
                fill="black"
                dominantBaseline="middle"
                style={{ pointerEvents: 'none' }}
            >
                {node.year} - {node.id}
            </text>
        )}
    </>
    )
}

export default Node;