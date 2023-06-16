## 🔑 API Key
### read-only access of public docs

Google requires this so they can at least meter your usage of their API.

Allowing only read-only access using an API key is a limitation of Google's API (see issuetracker)

Setup Instructions

1. Follow steps above to set up project and enable sheets API
2. Create an API key for your project
    * Navigate to the [credentials section of the google developer console](https://console.cloud.google.com/apis/credentials)
    * Click blue "+ CREATE CREDENTIALS" and select "API key" option
    * Copy the API key
3. OPTIONAL - click "Restrict key" on popup to set up restrictions
    * Click "API restrictions" > Restrict Key"
    * Check the "Google Sheets API" checkbox
    * Click "Save"