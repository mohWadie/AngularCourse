import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  intInv = '0';
  annInv = '0';
  expRet = '5';
  duration = '10';

  // calculateInvestmentResults() {
  //   const annualData = [];
  //   let investmentValue = this.intInv;

  //   for (let i = 0; i < this.duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (this.expRet / 100);
  //     investmentValue += interestEarnedInYear + this.annInv;
  //     const totalInterest = investmentValue - this.annInv * year - this.intInv;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: this.annInv,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: this.intInv + this.annInv * year,
  //     });
  //   }

  //   return annualData;
  // }

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.intInv,
      annualInvestment: +this.annInv,
      expectedReturn: +this.expRet,
      duration: +this.duration,
    });
  }
}
