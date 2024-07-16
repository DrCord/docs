---
title: ODK
---

# App Overview

[ODK](https://getodk.org) is a data collection platform used by researchers,
field teams, and other professionals to collect they data they need wherever it
is.

# Integration Options

In order to fetch data from an ODK Central, you must run a scheduled job with a
cron trigger using the `odk` adaptor.

Here's an example of a job that gets submission data.

```js
getSubmissions($.projectId, $.xmlFormId);
```

Every time this job runs it will get of all submissions and write them to
`state.data`, leaving your state object looking like this:

```json
{
  "data": [
    {
      "__id": "uuid:85cb9aff-005e-4edd-9739-dc9c1a829c44",
      "age": 25,
      "meta": {
        "instanceID": "uuid:85cb9aff-005e-4edd-9739-dc9c1a829c44"
      },
      "name": "Bob"
    },
    {
      "__id": "uuid:297000fd-8eb2-4232-8863-d25f82521b87",
      "age": 30,
      "meta": {
        "instanceID": "uuid:297000fd-8eb2-4232-8863-d25f82521b87"
      },
      "name": "Alice"
    }
  ],
  "response": {
    /* ODK response headers, code and context*/
  }
}
```
