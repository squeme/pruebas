import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetosComponent } from './tetos.component';

describe('TetosComponent', () => {
  let component: TetosComponent;
  let fixture: ComponentFixture<TetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
