import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoListComponent} from './todo/todo-list.component';
import {StoreModule} from '@ngrx/store';
import {reducer, todoFeatureKey,} from "./todo/todo.reducer";
import { EffectsModule } from '@ngrx/effects';
import {TodoEffects} from "./todo/todo.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TooltipDirective } from './directives/tooltip.directive';
import { DispDirective } from './directives/disp.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TooltipDirective,
    DispDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({[todoFeatureKey]: reducer}),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
