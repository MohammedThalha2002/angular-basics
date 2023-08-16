import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBasicsComponent } from './forms-basics.component';

describe('FormsBasicsComponent', () => {
  let component: FormsBasicsComponent;
  let fixture: ComponentFixture<FormsBasicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsBasicsComponent]
    });
    fixture = TestBed.createComponent(FormsBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
