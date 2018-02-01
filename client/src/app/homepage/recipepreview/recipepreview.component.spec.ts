import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipepreviewComponent } from './recipepreview.component';

describe('RecipepreviewComponent', () => {
  let component: RecipepreviewComponent;
  let fixture: ComponentFixture<RecipepreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipepreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
