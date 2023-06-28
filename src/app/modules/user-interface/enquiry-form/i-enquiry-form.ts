export interface IEnquiryForm {
  yearGroupOrAge: IEnquiryDropdownDetail;
  faceToFaceOrOnline: IEnquiryDropdownDetail;
  subject: IEnquiryDropdownDetail;
  subjectLevel: IEnquiryDropdownDetail;

  title: IEnquiryDropdownDetail;
  forename: IEnquiryFreeField;
  surname: IEnquiryFreeField;
  postcode: IEnquiryFreeField;
  phoneNumber: IEnquiryFreeField;
  email: IEnquiryFreeField;
  toggleComments: IEnquiryCheckbox;
  additionalComments: IEnquiryFreeField;
}

interface IEnquiryDetail {
  label: string;
  name: string;
}

interface IEnquiryDropdownDetail extends IEnquiryDetail {
  value:
    | YearGroupOrAgeValue
    | FaceToFaceOrOnline
    | Subject
    | SubjectLevel
    | Title;
  options: string[];
}

interface IEnquiryFreeField extends IEnquiryDetail {
  value: string | number;
}

interface IEnquiryCheckbox extends IEnquiryDetail {
  value: boolean;
}

type YearGroupOrAgeValue =
  | ''
  | 'Year 1 (5-6 years old)'
  | 'Year 2 (6-7 years old)'
  | 'Year 3 (7-8 years old)'
  | 'Year 4 (8-9 years old)'
  | 'Year 5 (9-10 years old)'
  | 'Year 6 (10-11 years old)';

type FaceToFaceOrOnline = 'Face-to-face' | 'Online';

type Subject = 'English' | 'Maths' | 'Science' | 'SEN';

type SubjectLevel = 'Key Stage 1' | 'Key Stage 2';

type Title = 'Mr' | 'Mrs' | 'Ms' | 'Miss' | 'Dr';
