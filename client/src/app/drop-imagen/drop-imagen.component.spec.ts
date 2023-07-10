import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropImagenComponent } from './drop-imagen.component';

describe('DropImagenComponent', () => {
  let component: DropImagenComponent;
  let fixture: ComponentFixture<DropImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
