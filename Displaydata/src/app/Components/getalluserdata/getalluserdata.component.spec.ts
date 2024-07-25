import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalluserdataComponent } from './getalluserdata.component';

describe('GetalluserdataComponent', () => {
  let component: GetalluserdataComponent;
  let fixture: ComponentFixture<GetalluserdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetalluserdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetalluserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
