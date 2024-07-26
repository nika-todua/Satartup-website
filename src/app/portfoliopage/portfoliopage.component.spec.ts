import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliopageComponent } from './portfoliopage.component';

describe('PortfoliopageComponent', () => {
  let component: PortfoliopageComponent;
  let fixture: ComponentFixture<PortfoliopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfoliopageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
