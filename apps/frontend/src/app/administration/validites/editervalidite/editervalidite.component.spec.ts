import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditervaliditeComponent } from './editervalidite.component';

describe('EditervaliditeComponent', () => {
  let component: EditervaliditeComponent;
  let fixture: ComponentFixture<EditervaliditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditervaliditeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditervaliditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
