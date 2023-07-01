import { Component } from '@angular/core';
import { IEnquiryForm } from './i-enquiry-form';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss'],
})
export class EnquiryFormComponent {
  public formName: string = 'enquiryForm';
  public enquiryForm: IEnquiryForm = {
    yearGroupOrAge: {
      label: 'Year group or age',
      name: 'yearGroupOrAge',
      value: '',
      options: [
        'Year 1 (5-6 years old)',
        'Year 2 (6-7 years old)',
        'Year 3 (7-8 years old)',
        'Year 4 (8-9 years old)',
        'Year 5 (9-10 years old)',
        'Year 6 (10-11 years old)',
      ],
    },
    faceToFaceOrOnline: {
      label: 'Face-to-face or Online',
      name: 'faceToFaceOrOnline',
      value: 'Online',
      options: ['Face-to-face', 'Online'],
    },
    subject: {
      label: 'Subject',
      name: 'subject',
      value: '',
      options: ['English', 'Maths', 'Science', 'SEN'],
    },
    subjectLevel: {
      label: 'Subject Level',
      name: 'subjectLevel',
      value: '',
      options: ['Key Stage 1', 'Key Stage 2'],
    },
    title: {
      label: 'Title',
      name: 'title',
      value: '',
      options: ['Mrs', 'Miss', 'Mr', 'Ms', 'Dr'],
    },
    forename: {
      label: 'Forename',
      name: 'forename',
      value: '',
    },
    surname: {
      label: 'Surname',
      name: 'surname',
      value: '',
    },
    postcode: {
      label: 'Postcode',
      name: 'postcode',
      value: '',
    },
    phoneNumber: {
      label: 'Phone Number',
      name: 'phoneNumber',
      value: '',
    },
    email: {
      label: 'Email',
      name: 'email',
      value: '',
    },
    toggleComments: {
      label: 'Add Additional Comments',
      name: 'additionalComments',
      value: false,
    },
    additionalComments: {
      label: 'Additional Comments',
      name: 'additionalComments',
      value: '',
    },
  };

  onSubmit() {
    
    console.log(this.enquiryForm);
  }
}
