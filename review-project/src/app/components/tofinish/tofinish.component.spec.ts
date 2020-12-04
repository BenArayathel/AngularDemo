import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TofinishComponent } from './tofinish.component';

describe('TofinishComponent', () => {
  let component: TofinishComponent;
  let fixture: ComponentFixture<TofinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TofinishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TofinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
