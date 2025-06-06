import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingSeminars } from './upcoming-seminars';

describe('UpcomingSeminars', () => {
  let component: UpcomingSeminars;
  let fixture: ComponentFixture<UpcomingSeminars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingSeminars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingSeminars);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
