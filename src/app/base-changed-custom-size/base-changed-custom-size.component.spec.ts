import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseChangedCustomSizeComponent } from './base-changed-custom-size.component';

describe('BaseChangedCustomSizeComponent', () => {
  let component: BaseChangedCustomSizeComponent;
  let fixture: ComponentFixture<BaseChangedCustomSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseChangedCustomSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseChangedCustomSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
