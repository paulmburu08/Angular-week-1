import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotemeComponent } from './quoteme.component';

describe('QuotemeComponent', () => {
  let component: QuotemeComponent;
  let fixture: ComponentFixture<QuotemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
