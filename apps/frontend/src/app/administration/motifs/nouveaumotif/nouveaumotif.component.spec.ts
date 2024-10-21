import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveaumotifComponent } from './nouveaumotif.component';

describe('NouveaumotifComponent', () => {
  let component: NouveaumotifComponent;
  let fixture: ComponentFixture<NouveaumotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouveaumotifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveaumotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
