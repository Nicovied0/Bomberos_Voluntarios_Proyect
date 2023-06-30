import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovilesComponent } from './moviles.component';

describe('MovilesComponent', () => {
  let component: MovilesComponent;
  let fixture: ComponentFixture<MovilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
