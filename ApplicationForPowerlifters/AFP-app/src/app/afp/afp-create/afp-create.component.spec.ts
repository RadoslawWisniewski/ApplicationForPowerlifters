import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfpCreateComponent } from './afp-create.component';

describe('AfpCreateComponent', () => {
  let component: AfpCreateComponent;
  let fixture: ComponentFixture<AfpCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfpCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfpCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
