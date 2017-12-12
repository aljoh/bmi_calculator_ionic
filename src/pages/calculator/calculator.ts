import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;
  system: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  systemSwitch() {
    if (this.system == "Metric" || null) {
      this.system = "Imperial"
    }
    else {
      this.system = "Metric"
    }
  }

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      if (this.system == "Metric" || null) {
        let finalBmi = this.weight / (this.height / 100 * this.height / 100);
      }
      else {
        let finalBmi = (this.weight * 703) / (this.height * this.height);
      }
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }
  }

  private setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiMessage = "Underweight"
    }

    else if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiMessage = "Normal"
    }

    else if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiMessage = "Overweight"
    }

    else {
      this.bmiMessage = "Obese"
    }
  }

}
