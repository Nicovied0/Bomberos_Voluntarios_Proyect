import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTextEditComponent } from './admin-text-edit.component';

describe('AdminTextEditComponent', () => {
  let component: AdminTextEditComponent;
  let fixture: ComponentFixture<AdminTextEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTextEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTextEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
