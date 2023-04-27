import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarysearchComponent } from './librarysearch.component';

describe('LibrarysearchComponent', () => {
  let component: LibrarysearchComponent;
  let fixture: ComponentFixture<LibrarysearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarysearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
