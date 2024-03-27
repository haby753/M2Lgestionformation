import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeformationsComponent } from './typeformations.component';

describe('TypeformationsComponent', () => {
  let component: TypeformationsComponent;
  let fixture: ComponentFixture<TypeformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeformationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
