import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private renderer;
  private colorScheme = 'dark';
  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
   }

   _detectPreferedColorScheme() {
      this.colorScheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light': 'dark';
   }

  _setColorScheme(scheme: string) {
    this.colorScheme = scheme;
    //localStorage.setItem('prefers-theme', scheme);
  }

  _getColorScheme() {
    /*
    const theme = localStorage.getItem('prefers-theme');
    if (theme) {
      this.colorScheme = theme;
    }
    */

    //else {
      this._detectPreferedColorScheme();
    //}
  }

  loadColorScheme() {
    this._getColorScheme();
    this._setColorScheme(this.colorScheme);
  }

  currentColorScheme(): string {
    return this.colorScheme;
  }


}
