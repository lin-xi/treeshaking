import {
  select
} from 'd3'

var svg = select("svg")
svg.append("circle")
      .attr("id", 'circle01')
      .attr("r", 100)
      .style("fill", 'lightgreen');

