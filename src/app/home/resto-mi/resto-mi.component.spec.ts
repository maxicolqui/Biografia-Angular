import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoMiComponent } from './resto-mi.component';

describe('RestoMiComponent', () => {
  let component: RestoMiComponent;
  let fixture: ComponentFixture<RestoMiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestoMiComponent]
    });
    fixture = TestBed.createComponent(RestoMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
