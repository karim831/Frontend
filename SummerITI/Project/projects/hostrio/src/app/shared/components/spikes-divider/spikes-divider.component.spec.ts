import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpikesDividerComponent } from './spikes-divider.component';

describe('SpikesDividerComponent', () => {
  let component: SpikesDividerComponent;
  let fixture: ComponentFixture<SpikesDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpikesDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpikesDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
