import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauroleComponent } from './nouveaurole.component';

describe('NouveauroleComponent', () => {
  let component: NouveauroleComponent;
  let fixture: ComponentFixture<NouveauroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouveauroleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveauroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
