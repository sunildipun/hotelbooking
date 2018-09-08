import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinHomeComponent } from './bookin-home.component';

describe('BookinHomeComponent', () => {
  let component: BookinHomeComponent;
  let fixture: ComponentFixture<BookinHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookinHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
