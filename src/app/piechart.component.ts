import { Component, Input, ElementRef, ViewChild, OnChanges, OnInit } from "@angular/core";
import * as D3 from 'd3';

@Component({
    selector: 'pie-chart',
    templateUrl: './piechart.component.html',
    styleUrls: ['./piechart.component.css']
})

export class PieChartComponent implements OnChanges, OnInit {

    legend: any;
    svg: any;
    arc: any;
    pie: any;
    path: any;
    width: number = 250;
    height: number = 250;
    donutWidth: number = 55;
    radius: number = Math.min(this.width, this.height) / 2;
    color: any;
    tooltip: any;


    legendRectSize: number = 15;
    legendSpacing: number = 4;

    @Input() dataset: Array<any>;
    @Input() test;

    ngOnInit() {


    }

    ngOnChanges() {
        D3.select('#tmp').remove();
        //remove temp svg, so that new svg can be added once data changes.
        this.createPieChart();

    }

    createPieChart() {
        if (this.dataset) {
            this.arc = D3.arc().innerRadius(this.radius - this.donutWidth).outerRadius(this.radius - 4);
            this.pie = D3.pie().value((dataset) => dataset['count']).sort(null);
            this.color = D3.scaleOrdinal(D3.schemeCategory20c);

            this.svg = D3.select('#donut_chart')
                //care for the # inside quotation
                .append('svg')
                .attr('id', 'tmp')
                .attr('width', this.width)
                .attr('height', this.height)
                .append('g')
                .attr('transform', 'translate(' + (this.width / 2) +
                ',' + (this.height / 2) + ')'
                );


            this.path = this.svg.selectAll('path')
                .data(this.pie(this.dataset))
                .enter()
                .append('path')
                .attr('d', this.arc)
                .attr('fill', (datum, index) => {
                    return this.color(datum.data.title);
                    //this fill attribute needs to investigate later
                });

            this.legend = this.svg.selectAll('.legend')
                .data(this.color.domain())
                .enter()
                .append('g')
                .attr('class', 'legend')
                .attr('transform', (datum, index) => {
                    var height = this.legendRectSize + this.legendSpacing;
                    var offset = height * this.color.domain().length / 2;
                    var horz = -2 * this.legendRectSize;
                    var vert = index * height - offset;
                    return 'translate(' + horz + ',' + vert + ')';
                });

            this.legend.append('rect')
                .attr('width', this.legendRectSize)
                .attr('height', this.legendRectSize)
                .style('fill', this.color)
                .style('stroke', this.color);

            this.legend.append('text')
                .attr('x', this.legendRectSize + this.legendSpacing)
                .attr('y', this.legendRectSize - this.legendSpacing)
                .text((d) => d);

            // this.tooltip = D3.select('#donut_chart')
            //     .append('div')
            //     .attr('class', 'tooltip');

            // this.tooltip.append('div')
            //     .attr('class', 'label');

            // this.tooltip.append('div')
            //     .attr('class', 'count');

            // this.tooltip.append('div')
            //     .attr('class', 'percent');


            // this.path.on('mouseover', (d) => {
            //     console.log('@@');
                
            //     // var total = D3.sum(this.dataset.map((dataset) => {
            //     //     return dataset['count'];
            //     // }));
            //     var percent = Math.round(1000 * d.data.count / 1) / 10;
            //     this.tooltip.select('.label').html(d.data.title);
            //     this.tooltip.select('.count').html(d.data.count);
            //    this.tooltip.select('.percent').html(percent + '%');
            //      this.tooltip.style('display', 'block');
            // });



            //     this.path.on('mouseout', function () {
            //     console.log('dddddd');
            //     //     this.tooltip.style('display', 'none');

            // });

        }
    }

}