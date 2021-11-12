import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionEditComponent } from './function-edit.component';

describe('EditComponent', () => {
  let component: FunctionEditComponent;
  let fixture: ComponentFixture<FunctionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
