import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent implements OnInit {
  userForm: any = FormGroup;
  arrowndownEnable: boolean = true;
  arrownUpEnable: boolean = false;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  public data: string[] = ['leaveForm', 'Tennis', 'Cricket', 'Football', 'Rugby'];
  constructor(private fb: FormBuilder, private router: Router) {
    document.title = "TNEB_Leave_Management";
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  exit() {
    this.router.navigate(['']);
  }

  keyDown() {
    this.handleKeyDown({ key: 'ArrowDown' } as KeyboardEvent);
  }

  keyUp() {
    this.handleKeyDown({ key: 'ArrowUp' } as KeyboardEvent);
  }

  handleKeyDown(event: KeyboardEvent) {
    const scrollContainer: any = document.querySelector('.scroll-container');
    const maxScrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight;


    if (event.key === 'ArrowDown') {
      scrollContainer.scrollTop += 20; // Scroll down
      if (scrollContainer.scrollTop >= maxScrollTop) {
        this.arrowndownEnable = false;
      } else {
        this.arrowndownEnable = true;
      }
    } else if (event.key === 'ArrowUp') {
      scrollContainer.scrollTop -= 20; // Scroll up
      if (scrollContainer.scrollTop <= 0) {
        this.arrowndownEnable = true;
      } else {
        this.arrowndownEnable = false;
      }
    }
  }


  ngAfterViewInit() {
    const scrollContainer: any = document.querySelector('.scroll-container');
    scrollContainer.setAttribute('tabindex', '0');
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(e: KeyboardEvent) {
    const scrollContainer: any = document.querySelector('.scroll-container');
    if (e.key === 'ArrowDown') {
      scrollContainer.scrollTop += 10; // Scroll down
      e.preventDefault(); // Prevent default action
    } else if (e.key === 'ArrowUp') {
      scrollContainer.scrollTop -= 10; // Scroll up
      e.preventDefault(); // Prevent default action
    }
  }

}
