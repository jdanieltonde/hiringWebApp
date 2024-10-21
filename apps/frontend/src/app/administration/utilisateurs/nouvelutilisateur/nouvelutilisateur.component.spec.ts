import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelutilisateurComponent } from './nouvelutilisateur.component';

describe('NouvelutilisateurComponent', () => {
  let component: NouvelutilisateurComponent;
  let fixture: ComponentFixture<NouvelutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelutilisateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
