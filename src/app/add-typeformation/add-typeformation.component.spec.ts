import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeformationComponent } from './add-typeformation.component';

describe('AddTypeformationComponent', () => {
  let component: AddTypeformationComponent;
  let fixture: ComponentFixture<AddTypeformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTypeformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTypeformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
