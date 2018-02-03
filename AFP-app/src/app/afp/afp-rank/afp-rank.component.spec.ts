import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfpRankComponent } from './afp-rank.component';

describe('AfpRankComponent', () => {
  let component: AfpRankComponent;
  let fixture: ComponentFixture<AfpRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfpRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfpRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
