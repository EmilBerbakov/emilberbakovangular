import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarydbComponent } from './librarydb.component';

describe('LibrarydbComponent', () => {
  let component: LibrarydbComponent;
  let fixture: ComponentFixture<LibrarydbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarydbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarydbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
