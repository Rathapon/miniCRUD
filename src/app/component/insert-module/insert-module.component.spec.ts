import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertModuleComponent } from './insert-module.component';

describe('InsertModuleComponent', () => {
  let component: InsertModuleComponent;
  let fixture: ComponentFixture<InsertModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
