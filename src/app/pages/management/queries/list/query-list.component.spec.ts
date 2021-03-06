import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryListComponent } from './query-list.component';

describe('ListComponent', () => {
  let component: QueryListComponent;
  let fixture: ComponentFixture<QueryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
