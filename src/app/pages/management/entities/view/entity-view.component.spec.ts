import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityViewComponent } from './entity-view.component';

describe('EditComponent', () => {
  let component: EntityViewComponent;
  let fixture: ComponentFixture<EntityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
