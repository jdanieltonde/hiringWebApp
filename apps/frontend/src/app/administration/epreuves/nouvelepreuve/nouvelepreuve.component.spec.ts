import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelepreuveComponent } from './nouvelepreuve.component';

describe('NouvelepreuveComponent', () => {
  let component: NouvelepreuveComponent;
  let fixture: ComponentFixture<NouvelepreuveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelepreuveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelepreuveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
