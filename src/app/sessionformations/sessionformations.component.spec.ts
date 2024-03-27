import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionformationsComponent } from './sessionformations.component';

describe('SessionformationsComponent', () => {
  let component: SessionformationsComponent;
  let fixture: ComponentFixture<SessionformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionformationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
