import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CustomSvgIconComponent} from './custom-svg-icon.component';

describe('CustomSVGIconComponent', () => {
  let component: CustomSvgIconComponent;
  let fixture: ComponentFixture<CustomSvgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSvgIconComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomSvgIconComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('svgPath', 'mail');
    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values for inputs', () => {
    expect(component.color()).toBe('black');
    expect(component.svgSize()).toBe(24);
  })

  it('should have the correct SVG path', () => {
    expect(component.getSvgPath()).toBe('svg/mail.svg');
  })
});
