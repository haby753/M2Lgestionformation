import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSessionFormationComponent } from './add-sessionformation.component';

describe('AddSessionformationComponent', () => {
  let component: AddSessionFormationComponent;
  let fixture: ComponentFixture<AddSessionFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSessionFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSessionFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
