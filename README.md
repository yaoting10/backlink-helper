# Backlink Helper

Backlink Helper is a Chrome/Edge Manifest V3 extension for managing backlink resources, preparing comment/profile information, and filling compatible website comment forms from a side panel.

## Features

- Manage website identity fields such as name, email, URL, description, and keywords.
- Browse and search built-in external backlink resources.
- Open selected backlink URLs from the extension side panel.
- Generate or rewrite comment text through OpenAI-compatible API providers.
- Fill comment text and website information into matching fields on the active page.
- Free quota exposes the first 50 external links; license validation unlocks the full link list.

## Project Structure

```text
src/
  manifest.json             Extension manifest
  background.js             Service worker for opening the side panel
  content.js                Page script for extracting content and filling forms
  popup.html                Side panel UI
  popup.js                  Side panel logic
  settings.html             Options/settings page
  settings.js               Settings and data management logic
  external-links-data.js    Built-in backlink resource data
  styles.css                Shared UI styles
```

## Local Installation

1. Open Chrome or Edge and go to the extensions page:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
2. Enable developer mode.
3. Click **Load unpacked**.
4. Select the `src/` directory in this repository.
5. Pin or open the extension side panel to start using it.

## API Settings

The extension supports OpenAI-compatible chat completion endpoints. Configure the provider, API key, base URL, and model in the settings page before using AI generation features.

Supported provider presets include OpenAI-compatible services such as OpenAI, DeepSeek, SiliconFlow, Zhipu, Gemini-compatible endpoints, OpenRouter, and custom base URLs.

Default API/model settings can also be hard-coded in `src/api-models-config.js`. Edit `window.API_MODELS_CONFIG.defaultSettings` to set the default provider, model, custom base URL, and optional local API key. Set `forceDefaultSettings: true` when you want this file to override API settings already saved in local browser storage.

## External Link Resources

Built-in backlink resources are configured in `src/external-links-data.js`.

Edit `window.PRELOADED_EXTERNAL_LINKS` directly to add, remove, or update links:

```js
{
  name: "Example Site",
  email: "",
  url: "https://example.com/profile/demo",
  text: "profile | strategy: url_field",
  desc: "Profile backlink resource",
  keywords: "profile, url_field"
}
```

Field reference:

- `name`: display name shown in the external link list.
- `email`: optional contact email.
- `url`: backlink target URL to open.
- `text`: short type or strategy note used by the UI.
- `desc`: description shown in settings/admin views.
- `keywords`: searchable tags, usually comma-separated.

The extension copies this preloaded list into `chrome.storage.local` during initialization. If the extension was already loaded before editing the file, reset/import the link data from the settings page or clear the extension's local storage to apply the new defaults.

## Permissions

The extension requests:

- `activeTab` to operate on the current tab.
- `storage` to store local settings, websites, comments, API settings, and license state.
- `sidePanel` to show the main extension interface.
- `scripting` to inject `content.js` when needed.
- `<all_urls>` host permissions so it can detect and fill forms across backlink target pages.

Because the extension can read page content and fill forms, review the permissions carefully before distributing it.

## Notes

This repository currently contains the extension distribution files directly under `src/`. Most JavaScript files are minified/obfuscated build artifacts, so future feature work is easier if the original source files or build pipeline are restored. `src/external-links-data.js` has been expanded into an editable data file for manual backlink configuration.
