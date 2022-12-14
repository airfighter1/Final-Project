import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentblocksComponent } from './contentblocks.component';

describe('ContentblocksComponent', () => {
  let component: ContentblocksComponent;
  let fixture: ComponentFixture<ContentblocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentblocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
