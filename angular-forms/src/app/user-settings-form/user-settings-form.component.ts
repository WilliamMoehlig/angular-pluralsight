import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: 'Moehlig',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...',
  };

  userSettings: UserSettings = { ...this.originalUserSettings };
  postError: boolean = false;
  postErrorMessage: string = '';
  subscriptionTypes: Observable<string[]>;
  userRating: number = 3;

  singleModel: string = 'On';
  startDate: Date;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
  }

  onBlur(field: NgModel) {
    console.log(`in onBlur: ${field.valid}`);
  }

  onHttpError(errorResponse: any): void {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors!';
      return;
    }
    this.dataService
      .postUserSettingsForm(this.userSettings)
      .subscribe(result => console.log('success: ', result), error => this.onHttpError(error));
    console.log('in onSubmit: ', form.valid);
  }
}
