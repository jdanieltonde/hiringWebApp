import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiditesComponent } from './validites.component';

describe('ValiditesComponent', () => {
  let component: ValiditesComponent;
  let fixture: ComponentFixture<ValiditesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValiditesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValiditesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
