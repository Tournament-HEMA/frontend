import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgesFormComponent } from './judges-form.component';

describe('JudgesFormComponent', () => {
  let component: JudgesFormComponent;
  let fixture: ComponentFixture<JudgesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudgesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
