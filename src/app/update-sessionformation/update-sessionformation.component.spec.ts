import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSessionFormationComponent } from './update-sessionformation.component';

describe('UpdateSessionformationComponent', () => {
  let component: UpdateSessionFormationComponent;
  let fixture: ComponentFixture<UpdateSessionFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateSessionFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSessionFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
