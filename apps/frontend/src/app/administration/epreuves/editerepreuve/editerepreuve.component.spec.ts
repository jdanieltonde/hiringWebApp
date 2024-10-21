import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerepreuveComponent } from './editerepreuve.component';

describe('EditerepreuveComponent', () => {
  let component: EditerepreuveComponent;
  let fixture: ComponentFixture<EditerepreuveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditerepreuveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditerepreuveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
