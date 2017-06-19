import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-detail',
  styles: [`
    .badge {
      border-radius: 0 50%;
      background-color: red;
      margin-right: 1rem;
    }
    `
  ],
  template: `
    <div class="card hero" *ngIf="hero">
      <h3 class="card-header"><span class="badge">{{hero.id}}</span>{{hero.name}}</h3>
      <div class="card-block">
        <p class="card-text">
          <label>Edit name: </label>{{" "}}<input [(ngModel)]="hero.name" placeholder="name" /><br />
        </p>
      </div>
    </div>
  `
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}
