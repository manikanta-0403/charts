import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDComponent } from './chart-d.component';

describe('ChartDComponent', () => {
  let component: ChartDComponent;
  let fixture: ComponentFixture<ChartDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
