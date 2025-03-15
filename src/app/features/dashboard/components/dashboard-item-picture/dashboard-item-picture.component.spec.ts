import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardItemPictureComponent } from './dashboard-item-picture.component';

describe('DashboardItemPictureComponent', () => {
  let component: DashboardItemPictureComponent;
  let fixture: ComponentFixture<DashboardItemPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardItemPictureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardItemPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
