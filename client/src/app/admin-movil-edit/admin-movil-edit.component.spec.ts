import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovilEditComponent } from './admin-movil-edit.component';

describe('AdminMovilEditComponent', () => {
  let component: AdminMovilEditComponent;
  let fixture: ComponentFixture<AdminMovilEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMovilEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMovilEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
