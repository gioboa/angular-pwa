// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  config: {
    "API_URL": "http://localhost:8080",
    "VAPID_PUBLIC_KEY": "BMlVY3kgdA_t_LdK3vuQTll4uEnsSXFpj857hMmwgd--1YN9a0ge2QNRCoWmmv-xJ24Gk4PiRY2tBhVfJqULF1Y"
  }
};
