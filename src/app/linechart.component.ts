import { Component, Input, ElementRef, ViewChild, OnChanges, OnInit } from "@angular/core";
import * as D3 from 'd3';

@Component({
  selector: 'line-chart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})

export class LineChartComponent implements OnInit, OnChanges {

  @Input() plotData;
  @Input() test2;
  svg: any;
  margin: any;
  width: any;
  height: any;
  g:any;



  // parseTime = D3.timeParse("%d-%b-%y");
  // x = D3.scaleTime().rangeRound([0, this.width]);
  // y = D3.scaleLinear().rangeRound([0, this.height]);




  ngOnInit() {
    this.svg = D3.select("line_chart").append('svg');
    this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
    // this.width = +this.svg.attr("width") - this.margin.left - this.margin.right;
    // this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
    this.width = 300;
    this.height = 300;
    this.g = this.svg.append("g").attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  ngOnChanges() {



    console.log("DFDF");
    console.log(this.plotData);

    // var line = D3.line()
    // .x(function(d) { return this.x(d.date); })
    // .y(function(d) { return this.y(d.value); });

    D3.json(JSON.parse(JSON.stringify(this.plotData)));

  }
}