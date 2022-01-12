# Bootstrapping Multiple Modules in Angular 10

Bootstrapping is a technique of initializing or loading our Angular application.

### How do app components template is loaded in index.html displays "app works!"? Let's find out.

1. All files are bundled when we hit ng serve CLI command and added automatically in index.html. They contain all the codes we write in the app folder.
2. The first file which gets executed during ng serve is from file name main.ts
3. We pass AppModule to the method which is part of app.module.ts..

```
platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
```
4. platformBrowserDynamic is the module, which is responsible for loading the Angular application in the desktop browser.
5. app.module.ts file holds an array of bootstrap components. The root module must have at least one root component. Root component gets loaded and the template files from app.component.html become part of index.html.
bootstrap: [AppComponent]
6. Our index.html already have the app-root CSS selector defined

```
<body>
 <app-root></app-root>
</body>
```

### Realtime example of using multiple modules instead of AppModule on condition basis
Angular is supporting run multiple apps on the same platform. If you have two application for web and mobile inside one angular application. Then you have to only load the particular module for separate version(web/mobile).
```
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
}}
```

For Web, Primary module will be loaded and for Mobile, secondary module will be loaded. For web, primary component will work like app.component and for mobile, secondary component will work like app.component. 
Now you can create you own custom components regarding web application inside primary folder.
Now you can create you own custom components regarding mobile application inside secondary folder.
These primary and secondary folder will act like two different application.

Also need to change the index.html root element
```
<!doctype html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <title>BootstrappingMultipleModules</title>
 <base href="/">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
 <app-primary></app-primary>
 <app-secondary></app-secondary>
</body>
</html>
```