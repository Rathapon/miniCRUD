import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMformComponent } from './insert-mform.component';

describe('InsertMformComponent', () => {
  let component: InsertMformComponent;
  let fixture: ComponentFixture<InsertMformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
