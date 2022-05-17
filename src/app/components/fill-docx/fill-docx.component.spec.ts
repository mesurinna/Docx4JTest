import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillDocxComponent } from './fill-docx.component';

describe('FillDocxComponent', () => {
  let component: FillDocxComponent;
  let fixture: ComponentFixture<FillDocxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillDocxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillDocxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
