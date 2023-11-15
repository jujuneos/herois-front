import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosHeroisComponent } from './dados.herois.component';

describe('DadosHeroisComponent', () => {
  let component: DadosHeroisComponent;
  let fixture: ComponentFixture<DadosHeroisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosHeroisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosHeroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
