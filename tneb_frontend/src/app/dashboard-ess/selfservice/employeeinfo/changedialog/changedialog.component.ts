import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-changedialog',
  templateUrl: './changedialog.component.html',
  styleUrls: ['./changedialog.component.scss']
})

export class ChangedialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ChangedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
 ngOnInit(): void {
   
 }
 addOnBlur = true;
//  readonly separatorKeysCodes = [ENTER, COMMA] as const;
 fruits: Fruit[] = [{name: 'Name'}, {name: 'Birth of Place'}, {name: 'Gender'}];

 add(event: MatChipInputEvent): void {
   const value = (event.value || '').trim();

   // Add our fruit
   if (value) {
     this.fruits.push({name: value});
   }

   // Clear the input value
   event.chipInput!.clear();
 }

 remove(fruit: Fruit): void {
   const index = this.fruits.indexOf(fruit);

   if (index >= 0) {
     this.fruits.splice(index, 1);
   }
 }
}

