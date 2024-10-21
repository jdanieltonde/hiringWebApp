import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveaurecrutementComponent } from './nouveaurecrutement.component';

describe('NouveaurecrutementComponent', () => {
  let component: NouveaurecrutementComponent;
  let fixture: ComponentFixture<NouveaurecrutementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouveaurecrutementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveaurecrutementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
