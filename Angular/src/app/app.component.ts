import { CommonModule } from '@angular/common';
import { Component, HostListener, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Import FormBuilder, FormGroup, Validators
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';

  constructor() { 
    this.isStudent = this.userType === 'student';
  }

  ngOnInit(): void { }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const container = document.querySelector('.gradient-container') as HTMLElement;
    if (container) {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      container.style.setProperty('--cursor-x', `${x}px`);
      container.style.setProperty('--cursor-y', `${y}px`);
    }
  }

  isStudent: boolean;
  @ViewChild('messageTemplate') messageTemplate!: TemplateRef<any>;
  @ViewChild('messageContainer', { read: ViewContainerRef }) messageContainer!: ViewContainerRef;

  userType = 'student';
  currentUser = { name: 'John Doe' };
  courses = [{ name: 'Math 101', description: 'Introduction to Algebra' }];

  showMessage() {
    this.messageContainer.clear();
    this.messageContainer.createEmbeddedView(this.messageTemplate, { message: 'You have a new message!' });
  }


}
