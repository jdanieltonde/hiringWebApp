import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvellevaliditeComponent } from './nouvellevalidite.component';

describe('NouvellevaliditeComponent', () => {
  let component: NouvellevaliditeComponent;
  let fixture: ComponentFixture<NouvellevaliditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvellevaliditeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvellevaliditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
