import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngelitoComponent } from './angelito.component';

describe('AngelitoComponent', () => {
  let component: AngelitoComponent;
  let fixture: ComponentFixture<AngelitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngelitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngelitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
