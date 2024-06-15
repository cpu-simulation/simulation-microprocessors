Frontend of CPU Simulation Project

### Install
First go the frontend directory and run this command to install packages:

```
npm install
```

### Configure API
Update `api` varaible in `src/lib.ts` to match your needs

If you are just testing the app, you can fire up a mockup api by running to see how it works:
```
node index.js
```
You can delete it if you have an API

### Run
You can run and explore the website using:

```
npm run dev
```

### Build
For building the frontend, use the command below:

```
npm run build
```

This will put the production ready build in `dist` directory so you can use it by serving
`dist/index.html`. Note that you should make `dist` a public directory so users can access its contents.
The website won't be available if you just pass the html when users don't have access to styles and scripts.

You can change the output directory by heading to `vite.config.ts` too.