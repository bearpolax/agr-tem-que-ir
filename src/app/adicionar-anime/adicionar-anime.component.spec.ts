import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAnimeComponent } from './adicionar-anime.component';

describe('AdicionarAnimeComponent', () => {
  let component: AdicionarAnimeComponent;
  let fixture: ComponentFixture<AdicionarAnimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarAnimeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
