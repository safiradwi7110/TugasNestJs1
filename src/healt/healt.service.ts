import { Injectable } from '@nestjs/common';

@Injectable()
export class HealtService {

    getBMI(weight: number, height: number): string {
    if (height <= 0 || weight <= 0) {
      return 'Invalid input';
    }
    if (isNaN(weight) || isNaN(height)) {
      return 'Invalid input';
    }
    //Calculate BMI
    const bmi = weight / (height * height);
    let category: string = "";
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi>= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
    return `Your BMI is ${bmi.toFixed(2)} (${category})`;
  } 
}
