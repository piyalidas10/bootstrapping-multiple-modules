import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { PrimaryModule } from './app/primary/primary.module';
import { SecondaryModule } from './app/secondary/secondary.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/*
 * Bootstrap mobile or web module based on mobile
 * or desktop client.
 */
const isMobileDevice = (): boolean => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {    
    return true;
  } else {
    return false;
  }
};
if (isMobileDevice()) {
  platformBrowserDynamic().bootstrapModule(SecondaryModule)
  .catch(err => console.error(err));
} else {
  platformBrowserDynamic().bootstrapModule(PrimaryModule)
      .catch(err => console.log(err));
}
