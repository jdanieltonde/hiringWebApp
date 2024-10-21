import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerrecrutementComponent } from './managerrecrutement.component';

describe('ManagerrecrutementComponent', () => {
  let component: ManagerrecrutementComponent;
  let fixture: ComponentFixture<ManagerrecrutementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerrecrutementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerrecrutementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
