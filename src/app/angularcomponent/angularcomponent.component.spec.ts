import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularcomponentComponent } from './angularcomponent.component';

describe('AngularcomponentComponent', () => {
  let component: AngularcomponentComponent;
  let fixture: ComponentFixture<AngularcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularcomponentComponent]
    });
    fixture = TestBed.createComponent(AngularcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
