import { async, TestBed } from '@angular/core/testing';

import { CustomSizeMixinComponent } from './custom-size-mixin.component';

describe('CustomSizeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomSizeMixinComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CustomSizeMixinComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have as title 'icon-test'", () => {
    const fixture = TestBed.createComponent(CustomSizeMixinComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('icon-test');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CustomSizeMixinComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to icon-test!');
  });
});
