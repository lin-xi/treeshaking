
import { select } from 'd3'

var svg = select('svg')
svg.style('background', 'black')
svg.append('circle')
    .attr('id', 'circle01')
    .attr('cx', 200)
    .attr('cy', 200)
    .attr('r', 100)
    .style('fill', 'lightgreen')
