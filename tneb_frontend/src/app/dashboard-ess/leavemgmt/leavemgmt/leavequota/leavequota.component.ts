import { Component, OnInit , Input, ViewChild} from '@angular/core';
import { newarray,City } from './leavequota';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-leavequota',
  templateUrl: './leavequota.component.html',
  styleUrls: ['./leavequota.component.scss']
})
export class LeavequotaComponent implements OnInit {
  step = 0;
  
  show: boolean;
  tabs: any;
  newextratab: any[];
  newshowtab: any[];
  public selectedIndexBinding: number = 0;
  images: any[] = []; // Your byte arrays go here
  imageUrls: string ;
  @Input()
  overlapTrigger: boolean;
  ExtraTab: any = newarray;
  leaveForm: FormGroup;
  eduInfo: any;  // This will hold the passed data
  cities: any;
  fileName: string | null = null;
  fileToUpload: File | null = null;
  errorMessage: string | null = null;

  selectedCity: any;

  approvalPersons = [
    { name: 'Manager 1', id: 1 },
    { name: 'Manager 2', id: 2 },
    { name: 'HR', id: 3 },
  ];
  daysDifference: number | null = null;
  disabledDates: Date[] = [
    new Date('2024-12-04'),  // Disable January 29, 2024
    new Date('2024-12-25')   // Disable May 30, 2024
  ];
  @ViewChild('tabgroup', { static: false }) tabGroup: MatTabGroup;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  overall: any[];
  selectedCity1: any;
  // show: boolean=false;
  title:boolean=true;
  overtight: string;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const navigation = history.state.eduInfo;
    this.cities=newarray;
    this.overall =City;
    if (navigation) {
      this.eduInfo = navigation;
      this.show=true; // The key used to pass the data
      console.log(this.eduInfo); // Log the data to see it
    }
    this.leaveForm = this.fb.group({
      fromDate: [null, Validators.required],
      toDate: [null, Validators.required],
      reason: ['', [Validators.required, Validators.maxLength(500)]],
      approvalPerson: [null, Validators.required],
    });
  //   this.http.get<any[]>('YOUR_API_URL_HERE').subscribe(response => {
  //   this.disabledDates = response.map(item => {
  //     const dateParts = item.dd.split('-'); 
     
  //     return new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
  //   });
  // });
  }

  onSubmit() {
    if (this.leaveForm.valid) {
      console.log('Form Submitted:', this.leaveForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  calculateDays() {
    const fromDate = this.leaveForm.get('fromDate')?.value;
    const toDate = this.leaveForm.get('toDate')?.value;

    if (fromDate && toDate) {
      let startDate = new Date(fromDate);
      let endDate = new Date(toDate);
      let daysCount = 0;

      // Loop through each day between the fromDate and toDate
      while (startDate <= endDate) {
        // Check if the current day is not a Sunday and not in the disabledDates array
        if (startDate.getDay() !== 0 && !this.isDateDisabled(startDate)) {
          daysCount++;
        }
        // Increment the date by one day
        startDate.setDate(startDate.getDate() + 1);
      }

      this.daysDifference = daysCount;
    }
  }
  onFileChange(event: any) {
    const file = event.target.files[0];  // Get the first file

    if (file) {
      // Check if the file is a PDF
      if (file.type !== 'application/pdf') {
        this.errorMessage = 'Please select a PDF file.';
        this.fileName = null;
        this.fileToUpload = null;
      } 
      // Check if the file size is less than 2MB
      else if (file.size > 2 * 1024 * 1024) {  // 2MB in bytes
        this.errorMessage = 'File is too large. Please select a file smaller than 2MB.';
        this.fileName = null;
        this.fileToUpload = null;
      } 
      else {
        this.errorMessage = null;
        this.fileName = file.name;
        this.fileToUpload = file;
      }
    }
  }

  uploadFile() {
    if (this.fileToUpload) {
      const formData = new FormData();
      formData.append('file', this.fileToUpload);

      // Call your service to upload the file
      // Example: this.uploadService.upload(formData);

      console.log('File ready to be uploaded:', this.fileToUpload);
      alert('File uploaded successfully!');
    } else {
      alert('Please select a valid PDF file.');
    }
  }
  isDateDisabled(date: Date): boolean {
    return this.disabledDates.some(
      (disabledDate) =>
        disabledDate.getDate() === date.getDate() &&
        disabledDate.getMonth() === date.getMonth() &&
        disabledDate.getFullYear() === date.getFullYear()
    );
  }

  
  titleChange(e){
    this.overtight=e.key;

  }

}
