import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfonComponent } from './notfon.component';

describe('NotfonComponent', () => {
  let component: NotfonComponent;
  let fixture: ComponentFixture<NotfonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotfonComponent]
    });
    fixture = TestBed.createComponent(NotfonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
