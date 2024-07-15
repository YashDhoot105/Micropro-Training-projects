import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotelistsidebarComponent } from './notelistsidebar.component';

describe('NotelistsidebarComponent', () => {
  let component: NotelistsidebarComponent;
  let fixture: ComponentFixture<NotelistsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotelistsidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotelistsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
