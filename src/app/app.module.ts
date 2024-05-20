import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './posts/services/posts.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PostsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const appEl = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('app-element', appEl);

    const postEl = createCustomElement(PostsComponent, {
      injector: this.injector,
    });
    customElements.define('post-element', postEl);
  }
}
