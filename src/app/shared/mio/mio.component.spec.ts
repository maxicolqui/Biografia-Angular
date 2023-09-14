import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MioComponent } from './mio.component';

describe('MioComponent', () => {
  let component: MioComponent;
  let fixture: ComponentFixture<MioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MioComponent]
    });
    fixture = TestBed.createComponent(MioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
