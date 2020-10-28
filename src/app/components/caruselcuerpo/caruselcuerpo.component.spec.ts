import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselcuerpoComponent } from './caruselcuerpo.component';

describe('CaruselcuerpoComponent', () => {
  let component: CaruselcuerpoComponent;
  let fixture: ComponentFixture<CaruselcuerpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaruselcuerpoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruselcuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
