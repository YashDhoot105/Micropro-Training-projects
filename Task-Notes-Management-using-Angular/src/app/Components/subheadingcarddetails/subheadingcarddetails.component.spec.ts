import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheadingcarddetailsComponent } from './subheadingcarddetails.component';

describe('SubheadingcarddetailsComponent', () => {
  let component: SubheadingcarddetailsComponent;
  let fixture: ComponentFixture<SubheadingcarddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubheadingcarddetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubheadingcarddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
