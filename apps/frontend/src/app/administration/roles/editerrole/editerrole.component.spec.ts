import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerroleComponent } from './editerrole.component';

describe('EditerroleComponent', () => {
  let component: EditerroleComponent;
  let fixture: ComponentFixture<EditerroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditerroleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditerroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
