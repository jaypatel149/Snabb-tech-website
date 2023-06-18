import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDevelopComponent } from './custom-develop.component';

describe('CustomDevelopComponent', () => {
  let component: CustomDevelopComponent;
  let fixture: ComponentFixture<CustomDevelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDevelopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
