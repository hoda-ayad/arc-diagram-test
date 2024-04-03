import * as d3 from "d3"
import Node from './Node'

const COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];
const MARGIN = { top: 10, right: 30, bottom: 50, left: 30 };

export function ArcDiagram({data, width, height}) {
  //read in data 
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  //compute node position
  const allNodeNames = data.nodes.map((node) => node.id);
  const allNodeYears= data.nodes.map((node) => node.year).sort();
  const allNodeGroups = [...new Set(data.nodes.map((node) => node.group))];

  const xScale = d3.scaleLinear().range([0, boundsWidth]).domain([d3.min(allNodeYears), d3.max(allNodeYears)]);
  const colorScale = d3
    .scaleOrdinal()
    .domain(allNodeGroups)
    .range(COLORS);

  const allNodes = data.nodes.map((node) => {
    return (
        <Node
            node={node}
            xScale={xScale}
            boundsHeight={boundsHeight}
            colorScale={colorScale}
        />
    );
  });

  //compute links
  const allLinks = data.links
    .filter(link => allNodeNames.includes(link.source) && allNodeNames.includes(link.target))
    .map((link, i) => {
      const xStart = xScale(getNodeYear(data, link.source));
      const xEnd = xScale(getNodeYear(data, link.target));

      return (
        <path
          key={i}
          d={horizontalArcGenerator(
            {'xStart': xStart,
             'yStart': boundsHeight,
             'xEnd': xEnd,
             'yEnd': boundsHeight}
          )}
          stroke={link.value===2 ? 'gray' : 'lightblue'}
          stroke-width="2"
          fill='none'
        />
      );
    });

  return (
    <div>
      <svg width={width} height={height}>
        <g 
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {allLinks}
          {allNodes}
        </g>
      </svg>
    </div>
  )
}

function horizontalArcGenerator(dims) {
  const xStart = dims.xStart;
  const yStart = dims.yStart;
  const xEnd = dims.xEnd;
  const yEnd = dims.yEnd;

  return [
    // the arc starts at the coordinate xStart, xEnd
    "M",
    xStart,
    yStart,

    // A means we're gonna build an Elliptical Arc Curve
    "A",
    (xStart - xEnd) / 2,    // rx: first radii of the ellipse (inflexion point)
    (xStart - xEnd) / 2,    // ry: second radii of the ellipse  (inflexion point)
    0,                      // angle: rotation (in degrees) of the ellipse relative to the x-axis
    1,                      // large-arc-flag: large arc (1) or small arc (0)
    xStart < xEnd ? 1 : 0,  // sweep-flag: the clockwise turning arc (1) or counterclockwise turning arc (0)

    // Position of the end of the arc
    xEnd,
    ",",
    yEnd,
  ].join(" ");
}

function getNodeYear(data, name) {
  const target = data.nodes.filter((node)=> node.id === name)[0]

  return target.year
}