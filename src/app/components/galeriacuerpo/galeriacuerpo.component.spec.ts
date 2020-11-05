import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriacuerpoComponent } from './galeriacuerpo.component';

describe('GaleriacuerpoComponent', () => {
  let component: GaleriacuerpoComponent;
  let fixture: ComponentFixture<GaleriacuerpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriacuerpoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriacuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
