import { Component } from '@angular/core';

@Component({
    selector: 'app-sms-component',
    template: `
    <div class="container">
    <h1>Send Sms</h1>
        <h6>Enter your mobile</h6>
  <div class='textboxes' class="fetch_btncontent">
    <input type="text" placeholder="Mobile" floatLabelType="Auto" style="width: 85%;">
    <button class="fetch_btn" disabled><i  class="e-icons e-repeat"></i></button>
  </div>
  <h6>Add subject</h6>
  <div class='textboxes'>
    <input type="text" placeholder="subject" floatLabelType="Always">
  </div>
</div>`,
    styles: [`
    .fetch_btncontent{
    width: 100%;
    display: flex;
}

.fetch_btn{
    width: 10%;
    border: none;
    background: dodgerblue;
    border-radius: 7px;
    font-size: 20px;
    margin: 10px 0px 0px 10px;
    color: black;
    cursor: pointer;
}
    
.container{
    padding:15px;
}
  `]
})
export class smscomponent {
    // Your component logic goes here
}

@Component({
    selector: 'app-email-component',
    template: `
    <div class="container">
        <h1>Send Email</h1>
        <h6>Enter your Email</h6>
  <div class='textboxes' class="fetch_btncontent">
    <input type="text" placeholder="Mobile" floatLabelType="Auto" style="width: 85%;">
    <button class="fetch_btn" disabled><i  class="e-icons e-repeat"></i></button>
  </div>

  <h6>Add subject</h6>
  <div class='textboxes'>
    <input type="text" placeholder="subject" floatLabelType="Always">
  </div>
</div>`,
    styles: [`
    .fetch_btncontent{
    width: 100%;
    display: flex;
}

.fetch_btn{
    width: 10%;
    border: none;
    background: dodgerblue;
    border-radius: 7px;
    font-size: 20px;
    margin: 10px 0px 0px 10px;
    color: black;
    cursor: pointer;
}
    
.container{
    padding:15px;
}
  `]
})
export class Emailcomponent {
    // Your component logic goes here
}


@Component({
    selector: 'app-call-component',
    template: `
    <div class="container">
        <h1>Make Call</h1>
</div>`,
    styles: [`
    .fetch_btncontent{
    width: 100%;
    display: flex;
}

.fetch_btn{
    width: 10%;
    border: none;
    background: dodgerblue;
    border-radius: 7px;
    font-size: 20px;
    margin: 10px 0px 0px 10px;
    color: black;
    cursor: pointer;
}
    
.container{
    padding:15px;
}
  `]
})
export class callcomponent {
    // Your component logic goes here
}


@Component({
    selector: 'app-admin-component',
    template: `
    <div class="container">
         <h1>Admin</h1>
</div>`,
    styles: [`
    .fetch_btncontent{
    width: 100%;
    display: flex;
}

.fetch_btn{
    width: 10%;
    border: none;
    background: dodgerblue;
    border-radius: 7px;
    font-size: 20px;
    margin: 10px 0px 0px 10px;
    color: black;
    cursor: pointer;
}
    
.container{
    padding:15px;
}
  `]
})
export class admincomponent {
    // Your component logic goes here
}


@Component({
    selector: 'app-dropdown-component',
    template: `
    <div class="container">
         <!-- dropdown.component.html -->
<div>
  <label for="options">Choose an option:</label>
  <select id="options" (change)="onOptionSelected($event)">
    <option *ngFor="let option of options" [value]="option">{{ option }}</option>
  </select>
</div>
<div *ngIf="selectedOption">
  <p>You selected: {{ selectedOption }}</p>
</div>

</div>`,
    styles: [`
    .fetch_btncontent{
    width: 100%;
    display: flex;
}

.fetch_btn{
    width: 10%;
    border: none;
    background: dodgerblue;
    border-radius: 7px;
    font-size: 20px;
    margin: 10px 0px 0px 10px;
    color: black;
    cursor: pointer;
}
    
.container{
    padding:15px;
}
/* dropdown.component.css */
div {
  margin: 10px 0;
}

select {
  padding: 5px;
  margin-right: 10px;
}

p {
  font-weight: bold;
}


  `]
})
export class dropdowncomponent {
    // Your component logic goes here
    options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    selectedOption: string = '';

    onOptionSelected(event: Event) {
        this.selectedOption = (event.target as HTMLSelectElement).value;
        console.log('Selected option:', this.selectedOption);
    }
}