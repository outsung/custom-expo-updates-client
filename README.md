# Custom Expo Updates Client

This is the client example for [custom-expo-updates-server](https://github.com/outsung/custom-expo-updates-server).

## Implementation Steps

- Create a project using create-expo-app:

```sh
$ npx create-expo-app -t expo-template-blank-typescript
```

- Install [expo-updates](https://docs.expo.dev/versions/latest/sdk/updates/#installation) and add the plugin.

- Add `eas.json` ([Reference](https://docs.expo.dev/build/eas-json/)).

- Copy the two files from the [scripts folder](https://github.com/outsung/custom-expo-updates-server/tree/main/scripts).

- Update the server address in the [upload.sh](./scripts/upload.sh) file.

- Add `"env": { "APP_VARIANT": "production" }` to eas.json.

- Modify [app.config.ts](./app.config.ts) to use APP_VARIANT and update the updates URL:

```ts
updates: {
  url: `https://mom-update.mommoss.com/api/update/expo/manifests/release/${APP_VARIANT}/latest`,
},
```

## Issues

- If there are no assets, an error occurs in [upload.sh](./scripts/upload.sh)
