import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedGoogleMapsComponent } from './embed-google-maps.component';

describe('EmbedGoogleMapsComponent', () => {
  let component: EmbedGoogleMapsComponent;
  let fixture: ComponentFixture<EmbedGoogleMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbedGoogleMapsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbedGoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
