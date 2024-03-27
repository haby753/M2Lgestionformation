import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeFormationComponent } from './update-typeformation.component';

describe('UpdateTypeformationComponent', () => {
  let component: UpdateTypeFormationComponent;
  let fixture: ComponentFixture<UpdateTypeFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTypeFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTypeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
