import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovilEditMaintenanceComponent } from './admin-movil-edit-maintenance.component';

describe('AdminMovilEditMaintenanceComponent', () => {
  let component: AdminMovilEditMaintenanceComponent;
  let fixture: ComponentFixture<AdminMovilEditMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMovilEditMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMovilEditMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
