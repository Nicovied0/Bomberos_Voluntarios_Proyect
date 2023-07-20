import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewPostComponent } from './admin-new-post.component';

describe('AdminNewPostComponent', () => {
  let component: AdminNewPostComponent;
  let fixture: ComponentFixture<AdminNewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
