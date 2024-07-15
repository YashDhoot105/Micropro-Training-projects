import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotelistsubheadingcardsComponent } from './notelistsubheadingcards.component';

describe('NotelistsubheadingcardsComponent', () => {
  let component: NotelistsubheadingcardsComponent;
  let fixture: ComponentFixture<NotelistsubheadingcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotelistsubheadingcardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotelistsubheadingcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
