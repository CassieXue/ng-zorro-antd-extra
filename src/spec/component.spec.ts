import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzListModule } from 'ng-zorro-antd-extra';

const html = ``;

describe('Component: ng-zorro-antd-extra', () => {
  let fixture: ComponentFixture<any>;
  let context: TestNGComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestNGComponent],
      imports: [NzListModule]
    });
    TestBed.overrideComponent(TestNGComponent, {set: {template: html}});
    fixture = TestBed.createComponent(TestNGComponent);
    context = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('fixture should not be null', () => {
    expect(fixture).not.toBeNull();
  });
});

@Component({
  selector: 'ng-zorro-antd-extra-test',
  template: ''
})
class TestNGComponent {
}
