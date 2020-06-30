import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyratioComponent } from './keyratio.component';

describe('KeyratioComponent', () => {
  let component: KeyratioComponent;
  let fixture: ComponentFixture<KeyratioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyratioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyratioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
