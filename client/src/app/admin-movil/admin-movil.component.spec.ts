import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovilComponent } from './admin-movil.component';

describe('AdminMovilComponent', () => {
  let component: AdminMovilComponent;
  let fixture: ComponentFixture<AdminMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMovilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
