---
title: Roadmap and Product Ethos
sidebar_label: Roadmap
---

## Introduction

This page details the planned roadmaps for the key products in the OpenFn
product suite, including Lightning, Adaptors, and this Docs site. While this
page will be updated periodically, you can track our realtime roadmap and
progress [here](#what-are-we-currently-working-on).

## Our approach to product development

At OpenFn, we follw the [Shape Up approach](https://basecamp.com/shapeup) to
help our small engineering team build _meaningul_ products and features faster
without compomising on quality. With Shape Up in place, we typcially commit to
_projects_ that can be delivered in a 4-6 week period with multiple releases
based on QA approval within the building cycle. We also proiritize feedback and
feature requests from our users over features in the backlog.

:::success Transparency and building what matters

Note that it's fairly rare for us to commit to delivering a specific feature
more than 2 or 3 months in the future. We are committed to constantly evluating
what our user base needs most and spending the few resources we have to deliver
value to them—we simply can't guarantee that what sounds like the "7th most
important feature to build" now will still be on our list in 6 months.

At the same time, we strive to be as transparent and inclusive as we can in our
planning processes. We have a big backlog of feature requests and GitHub issues
(bug reports, stubs, even partially shaped epics or projects) that are getting
voted up, commented on, and used as inspiration when we're deciding what to
prioritize next.

Read on to learn more about how we work, how you can see what's coming, and how
you can get involved!

:::

## What are we currently working on?

All of our team's work is tracked publicly using a GitHub Project. Three key
views give you up-to-the-minute insights on what we're doing and what's on our
immediate roadmap.

### See [**_Now_**](https://github.com/orgs/OpenFn/projects/3/views/1) 🚧 for what's been funded and is currently being built

### See [**_Next_**](https://github.com/orgs/OpenFn/projects/3/views/2) 📝 for what's being shaped and _may_ be funded in the next cycle

### See [**_Epics_**](https://github.com/orgs/OpenFn/projects/3/views/7) 🤔 for a list of projects that we're considering, roughly-prioritized

### See [**_Bugs_**](https://github.com/orgs/OpenFn/projects/3/views/22) 🐞 for reported bugs

We will update this site periodically (ideally after each cycle, typically
lasting between 2-6 weeks) to reflect our progress on major items. You can also
keep track of all new features, changes, and bug fixes in our
[Changelog](https://openfn.github.io/lightning/changelog.html).

## How to **get involved**

We use [Canny](https://openfn.canny.io/feature-requests) to receive, track,
engage and manage new feature requests from the community of users of OpenFn
globally whilst giving users the ability to the upvote their favoritie and
mission critical feature request.

### Upvote features 👍

1. Go to [openfn.canny.io](https://openfn.canny.io/feature-requests)
2. Scroll down or use the filter and search features to see existing feature
   requests
3. Click on the (^) beside the request to upvote
4. If you want more upvotes for this feature request, share a link to the
   feature with your network

### Request a new feature 💡

1. Go to [openfn.canny.io](https://openfn.canny.io/feature-requests)
2. Provide a very clear, concise and descriptive title for the feature (e.g.,
   "Make the new workflow button green")
3. Describe the feature request in detail and why it's important to you
4. Share the feature request on the OpenFn community and across your
   professional network for upvotes

:::info Tip

When describing the feature, it is very helpful to help us understand the
problem, proposed solution (if any) and similar solutions we might glean
insights from _if they exist_.

:::

### Open an issue or bug directly

If you prefer the direct approach, you can search across all tracked issues in
OpenFn's GitHub org [here](https://github.com/OpenFn), comment on them, or even
pick them up to work on yourself. If you don't find what you're looking for,
please go ahead an create an issue in the relevant repo. We'll do our best to
respond promptly!

## Summary Roadmaps

#### How to interpret `Status` values in the roadmap

- `Tracked` means we're thinking about this, but it hasn't been
  designed/scoped/shaped
- `Shaped` means it's been scoped and ready to be picked up by an engineer
- `In dev` means it's currently being worked on by an engineer (see
  [_NOW_](#what-are-we-currently-working-on))
- `Delivered` means it's been released (see
  [Changelog](https://openfn.github.io/lightning/changelog.html))

### Lightning Roadmap

OpenFn/Lightning is the fully open-source workflow automation platform at the
core of the OpenFn Digital Public Good (learn more about the product
[here](/documentation#openfn-v2-lightning-)).

| **Feature**                                                           | **`Status`** | **Target Timeline** | **Related Links**                                             | **Description**                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------- | ------------ | ------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Extend workflow canvas to allow branch merging                     | Delivered    | Q2 '24              | [Issue 2008](https://github.com/OpenFn/lightning/issues/2008) | Allow users to be able to skip steps and also merge two steps to one downstream step in a workflow                                                                                                                                                      |
| 2. Implement Generic OAuth credential type                            | Delivered    | Q2 '24              | [Issue 1900](https://github.com/OpenFn/lightning/issues/1900) | Generic OAuth client and credential support for adaptors. Users can configure their own OAuth applications and credentials for OpenFn.                                                                                                                  |
| 3. Add path params in webhook triggers URL                            | Delivered    | Q2 '24              | [Issue 1954](https://github.com/OpenFn/lightning/issues/1954) | Support path params in wenhook URL for workflows.                                                                                                                                                                                                       |
| 4. Automatic GitHub version control                                   | Delivered    | Q2 '24              | [Issue 970](https://github.com/OpenFn/lightning/issues/970)   | Use GitHub Version Control to track and review changes to your workflow. Sync an OpenFn project and workflows to a specified GitHub repository github and allow users to be able to update OpenFn projects with GitHub versions.                        |
| 5. Configurable data clips and history retention period               | Delivered    | Q2 '24              | [Issue 1760](https://github.com/OpenFn/lightning/issues/1760) | Allow project administrators to configure how long they want OpenFn to retain data clips and other artifacts related to a workorders in their projects                                                                                                  |
| 6. Enable workflow snapshotting                                       | Delivered    | Q3 '24              | [Issue 1680](https://github.com/OpenFn/lightning/issues/1680) | Keep a snapshot of a snapshot based on a run or saved changes of the workflow. Allow users to be able to view snapshot and switch to the latest version of the workflow from a snapshot mode.                                                           |
| 7. Enable configurable concurrency by workflow                        | Delivered    | Q3 '24              | [Issue 2002](https://github.com/OpenFn/lightning/issues/2022) | Allow users to control the limit of concurrent runs per workflow in a project.                                                                                                                                                                          |
| 8. New workflow triggers (Kafka)                                      | Delivered    | Q3 '24              | [Issue 1801](https://github.com/OpenFn/lightning/issues/1801) | Enable a new trigger type that allows users to run workflows based on messages from a Kafka cluster.                                                                                                                                                    |
| 9. AI-enabled assitants                                               | Delivered    | Q3 '24              | [Issue 2193](https://github.com/OpenFn/lightning/issues/2193) | LLM based AI assitant that supports users with job writing, debugging and co-piloting their workflow design process.                                                                                                                                    |
| 10. Invite new users as collaborators                                 | Delivered    | Q3 '24              | [Issue 1835](https://github.com/OpenFn/lightning/issues/1835) | Invite users who do not have OpenFn accounts to projects as collaborators.                                                                                                                                                                              |
| 11. Allow users to create projects                                    | In dev       | Q3 '24              | [Issue 1700](https://github.com/OpenFn/Lightning/issues/1700) | All users to create new projects from their dashboard.                                                                                                                                                                                                  |
| 13. Allow users to export workorder history                           | Shaped       | Q3 '24              | [Issue 1698](https://github.com/OpenFn/lightning/issues/1698) | Allow project users to be able to export workorder history. The workorder history contains ALL logs and data clips (Input and Output) associated with runs in a workorder.                                                                              |
| 12. Control log outputs                                               | Tracked      | Q3 '24              | [Issue 1755](https://github.com/OpenFn/Lightning/issues/1755) | Control what is printed in run logs by specifying log levels and allow users to disable printing console.logs, for data privacy once workflows are handling production data.                                                                            |
| 14. Enable manual workflow triggers                                   | Tracked      | Q4 '24              | [Issue 2155](https://github.com/OpenFn/lightning/issues/2155) | Enable users to manually trigger workflow with JSON/CSV data as input data clip                                                                                                                                                                         |
| 15. Project datastores and buffers                                    | Tracked      | Q4 '24              | [Issue 2190](https://github.com/OpenFn/lightning/issues/2190) | Allow users to configure a data store or buffer that allows temporary of storage of data that can be used in a workflow.                                                                                                                                |
| 16. Redesign workflow canvas and inspector interface                  | Tracked      | Q4 '24              | [Issue 2021](https://github.com/OpenFn/lightning/issues/2021) | Make workflow design better to help user build workflow faster and easier.                                                                                                                                                                              |
| 17. Improved History page filter                                      | Tracked      | Q4 '24              | [Issue 1791](https://github.com/OpenFn/lightning/issues/1791) | Extend workorder history page and enable cascading filtering. This is useful for debuging, failure recovery and auditability of the workflow.                                                                                                           |
| 18. Enhanced websocket worker Monitoring                              | Tracked      |                     | [Issue 608](https://github.com/OpenFn/kit/issues/608)         | Give users better visibility of what's happening on inside the worker, especially when an error occurs during run execution.                                                                                                                            |
| 19. Expanded Audit Trail and Node Authentication (ATNA) functionality | Tracked      |                     | [Issue 271](https://github.com/OpenFn/Lightning/issues/271)   | Extend audit trail functionality to cover more aspects of ATNA, reference [OpenHIE IOL requirement IOLWF-1](https://guides.ohie.org/arch-spec/openhie-component-specifications-1/openhie-interoperability-layer-iol#openhie-iol-workflow-requirements). |

_You can follow Lightning's progress and track delivered features in the
[Changelog](https://openfn.github.io/lightning/changelog.html)._

### Adaptors Roadmap

OpenFn's open-source adaptors can connect any application, including web APIs,
databases, and even raw data files, enabling interoperability with any
information system ([read more](/adaptors/)). Adaptors, alongside OpenFn's
workflow engine, enable automated workflows that cut across digital systems.

| **Feature**                                                                                       | **`Status`** | **Target Timeline** | **Related Links**                                                                                             | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------- | ------------ | ------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Add "magic" functions to existing, in-demand adaptors                                          | Delivered    | Q1 2024             | [Issue 243](https://github.com/OpenFn/adaptors/issues/243)                                                    | Add functions, dynamic lists, and shortcuts to fast-track workflow configuration for key adaptors including HTTP, [DHIS2](https://dhis2.org/), [CommCare](https://www.dimagi.com/commcare/), & [OpenMRS](https://openmrs.org/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2. New [`OpenMRS`](https://openmrs.org/) adaptor version                                          | Delivered    | Q2 2024             | [See existing adaptor docs](/adaptors/packages/openmrs-readme)                                                | To ensure compliance with OpenMRS v3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 3. Enhancements to [`FHIR`](http://www.hl7.org/fhir/) & [`OpenHIM`](http://openhim.org/) adaptors | Delivered    | Q3 2024             | See existing adaptors for [FHIR](/adaptors/packages/fhir-docs) and [OpenHIM](/adaptors/packages/openhim-docs) | To rebuild the existing 2021 [OpenFn Instant-OpenHIE reference demo](/documentation/get-started/standards#openhie-standard-architecture) to highlight the exchange of data between existing non-FHIR digital health tools and a HAPI FHIR server. (OpenFn Lightning is OpenHIE-compliant and can be used as a workflow engine for the OpenHIE Interoperability layer - [learn more here](/documentation#openfn-v2-lightning-#standards-and-compliance-matter).) We also want to demonstrate data exchange between existing non-FHIR digital health tools and key components of Google’s [Open Health Stack](https://developers.google.com/open-health-stack) and [Cloud Healthcare API](https://cloud.google.com/healthcare-api/docs/concepts/fhir) |
| 4. Enhancements to the [`OCL`](https://openconceptlab.org/) adaptor                               | Not started  | Q4 2024             | [See existing adaptor docs](/adaptors/packages/ocl-readme)                                                    | To ensure that mappings stored in OCLs can be more easily access and processed as inputs in OpenFn/Lightning workflows                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Docs Roadmap

| **Feature**                                                 | **`Status`** | **Target Timeline** | **Related Links**                                                                                                                             | **Description**                                                                                                                                                                                                                                                    |
| ----------------------------------------------------------- | ------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. OpenFn and the [OpenHIE](https://ohie.org/) architecture | Delivered    | 2024                | [See current docs](/documentation#openfn-v2-lightning-#standards-and-compliance-matter)                                                       | New page dedicated to how OpenHIE aligns with OpenHIE architecture; expansion of the existing small section on standards                                                                                                                                           |
| 2. New Lightning User Guidance                              | In dev       | 2024                | To be hosted on docs.openfn.org                                                                                                               | New documentation, videos, and other user guidance on how to use OpenFn/Lightning and how to migrate existing OpenFn/platform projects to Lightning (the new OpenFn "v2")                                                                                          |
| 3. Template [FHIR](http://www.hl7.org/fhir/) Workflows      | Planned      | 2024                | To be hosted on demo.openfn.org                                                                                                               | OpenFn can already help achieve FHIR compliance, but we will build and document reference/template workflows to demonstrate how OpenFn/Lightning can automate data exchange, registration, and/or reporting workflows between non-FHIR data systems and FHIR APIs. |
| 4. Template Alerting Workflows                              | Not started  | 2024                | [See OpenHIE docs](https://guides.ohie.org/arch-spec/introduction/alerting-sending-reminders-or-information); to be hosted on demo.openfn.org | To demonstrate how OpenFn can facilitate one-way communication to a client or provider listed in the HIE (from the OpenHIE standard spec)                                                                                                                          |
| 5. Template Shared Health Record Workflows                  | Not started  | 2024                | [See OpenHIE docs](https://guides.ohie.org/arch-spec/introduction/shared-health-record); to be hosted on demo.openfn.org                      | To demonstrate how OpenFn can allow external systems to automatically save and retrieve information from the HIE (from the OpenHIE standard spec)                                                                                                                  |
| 6. Template Aggregate Reporting Workflows                   | Not started  | 2024                | [See OpenHIE docs](https://guides.ohie.org/arch-spec/introduction/aggregate-reporting-workflows); to be hosted on demo.openfn.org             | To demonstrate how OpenFn can support aggregate data exchange of health indicators, leveraging the [ADX](https://wiki.ihe.net/index.php/Aggregate_Data_Exchange) data standard                                                                                     |

## Have questions, feedback or found a bug?

We encourage users to post their questions on the OpenFn Community at
[community.openfn.org](https://community.openfn.org), or consider creating
issues for bugs via product repository. You can also independetly start
contributing to the OpenFn software, adaptors, or documentation by getting
started [here](./writing-code.md).
