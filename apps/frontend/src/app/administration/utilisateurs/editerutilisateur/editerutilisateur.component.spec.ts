import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerutilisateurComponent } from './editerutilisateur.component';

describe('EditerutilisateurComponent', () => {
  let component: EditerutilisateurComponent;
  let fixture: ComponentFixture<EditerutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditerutilisateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditerutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
