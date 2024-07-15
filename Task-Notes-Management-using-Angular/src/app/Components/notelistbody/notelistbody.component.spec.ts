import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotelistbodyComponent } from './notelistbody.component';

describe('NotelistbodyComponent', () => {
  let component: NotelistbodyComponent;
  let fixture: ComponentFixture<NotelistbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotelistbodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotelistbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
