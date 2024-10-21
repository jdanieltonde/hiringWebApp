import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuniqueComponent } from './communique.component';

describe('CommuniqueComponent', () => {
  let component: CommuniqueComponent;
  let fixture: ComponentFixture<CommuniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommuniqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommuniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
