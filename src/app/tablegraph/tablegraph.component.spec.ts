import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablegraphComponent } from './tablegraph.component';

describe('TablegraphComponent', () => {
  let component: TablegraphComponent;
  let fixture: ComponentFixture<TablegraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablegraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
