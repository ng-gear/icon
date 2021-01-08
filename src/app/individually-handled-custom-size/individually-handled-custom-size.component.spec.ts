import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuallyHandledCustomSizeComponent } from './individually-handled-custom-size.component';

describe('IndividuallyHandledCustomSizeComponent', () => {
  let component: IndividuallyHandledCustomSizeComponent;
  let fixture: ComponentFixture<IndividuallyHandledCustomSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividuallyHandledCustomSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividuallyHandledCustomSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
