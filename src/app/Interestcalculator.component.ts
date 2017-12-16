import { Component, Input } from '@angular/core';

@Component({
  selector: 'interestCalculator',
  templateUrl: './interestcalculator.component.html',
  styleUrls: ['./interestcalculator.component.css']
})
export class InterestCalculatorComponent {

  principal: number = 0;
  interest_rate: number = 0;
  contribution: number = 0;
  maturity: number = 0;
  tax_rate: number = 0;
  inflation_rate: number = 0;
  end_balance: number = 0;
  inflation_adjusted_balanace: number = 0;
  interest_amount: number = 0;
  total_principal: number = 0;
  contribution_time: string = 'beginning';
  compound: string = 'annually';
  number_of_contribution_per_year: number = 1;
  total_tax: number = 0;
  total_without_tax: number = 0;
  break_down_data: Array<number> = [];
  break_down_percentage: Array<any> = [];
  test: string = 'tttttttttttttttttttest';
  test2: string = 'testt'; 
  plotData: Object = {};
  interval: number = 1;
  date: number = 0;



  calculate(maturity:number) {

    this.number_of_contribution_per_year = this.calculate_number_of_contribution();
    if (this.principal == null) {
      this.principal == 0;
    }

    if (this.total_principal == null) {
      this.total_principal == 0;
    }

    if (this.interest_amount == null) {
      this.interest_amount == 0;
    }


    this.total_principal = this.principal + this.contribution * maturity * this.number_of_contribution_per_year;

    if (this.interest_rate == 0 || this.interest_rate == null) {
      this.end_balance = this.total_principal;
      this.interest_amount = 0;
      this.inflation_adjusted_balanace = this.total_principal;
      this.total_without_tax = this.total_principal;
      this.total_tax = 0;
    }

    else {
      if (this.contribution_time == 'beginning') {
        this.total_without_tax =
          this.principal * ((1 + this.interest_rate / 100 / this.number_of_contribution_per_year) ** (maturity * this.number_of_contribution_per_year)) +
          this.contribution * (((1 + this.interest_rate / 100 / this.number_of_contribution_per_year) ** (maturity * this.number_of_contribution_per_year) - 1)) / (this.interest_rate / 100 / this.number_of_contribution_per_year) * (1 + this.interest_rate / 100 / this.number_of_contribution_per_year);
      }

      if (this.contribution_time == 'end') {
        this.total_without_tax =
          this.principal * ((1 + this.interest_rate / 100 / this.number_of_contribution_per_year) ** (maturity * this.number_of_contribution_per_year)) +
          this.contribution * (((1 + this.interest_rate / 100 / this.number_of_contribution_per_year) ** (maturity * this.number_of_contribution_per_year)) - 1) / (this.interest_rate / 100 / this.number_of_contribution_per_year);
      }

      this.total_tax = parseFloat(((this.total_without_tax - this.principal) * this.tax_rate / 100).toFixed(2));
      this.end_balance = parseFloat((this.total_without_tax - this.total_tax).toFixed(2));
      this.interest_amount = parseFloat((this.end_balance - this.total_principal).toFixed(2));
      this.inflation_adjusted_balanace = parseFloat((this.end_balance / (1 + this.inflation_rate / 100) ** maturity).toFixed(2));

    }

    if (this.end_balance != 0) {
      this.break_down_percentage[0] = { 'title': 'principal', 'count': this.total_principal / this.end_balance };
      this.break_down_percentage[1] = { 'title': 'interest', 'count': this.interest_amount / this.end_balance };
      this.break_down_percentage[2] = { 'title': 'tax', 'count': this.total_tax / this.end_balance };
    }

    return [this.end_balance, this.interest_amount, this.total_principal, this.total_tax];    
  }


  calculate_number_of_contribution(): number {
    switch (this.compound) {
      case 'annually':
        return 1;

      case 'semiannually':
        return 2;

      case 'quarterly':
        return 4;

      case 'monthly':
        return 12;

      case 'semimonthly':
        return 24;


      case 'biweekly':
        return 26;

      case 'weekly':
        return 52;

      case 'daily':
        return 365;

      default:
        return Number.MAX_VALUE;
    }
  }


  getPlotData() {
    while (this.date <= this.maturity) {
      this.plotData[this.date] = this.calculate(this.date);
      this.date += this.interval;
    }
    this.plotData[this.maturity] = this.calculate(this.maturity);
    
  }

  calculate_and_plot() {
    this.date = 0;
    this.plotData = {};
    //reset plotdata data
    this.calculate(this.maturity);
    this.getPlotData();
    this.test += '*';
    this.test2 += '2';
  }
}

