import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfpListComponent } from './afp-list.component';

describe('AfpListComponent', () => {
  let component: AfpListComponent;
  let fixture: ComponentFixture<AfpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
