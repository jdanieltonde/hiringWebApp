import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditermotifComponent } from './editermotif.component';

describe('EditermotifComponent', () => {
  let component: EditermotifComponent;
  let fixture: ComponentFixture<EditermotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditermotifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditermotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
