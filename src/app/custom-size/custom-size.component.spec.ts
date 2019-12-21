import { async, TestBed } from '@angular/core/testing';

import { CustomSizeComponent } from './custom-size.component';

describe('CustomSizeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomSizeComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CustomSizeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have as title 'icon-test'", () => {
    const fixture = TestBed.createComponent(CustomSizeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('icon-test');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CustomSizeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to icon-test!');
  });
});
