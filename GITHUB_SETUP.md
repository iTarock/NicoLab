# GitHub Setup Guide

Use this checklist to make `iTarock/NicoLab` look and behave like a serious public project.

## Repository About Panel

Recommended description:

```text
Public documentation for the iTarock home lab: architecture, networking flows, security baseline, service inventory and runbooks.
```

Recommended website:

```text
https://itarock.ch
```

Recommended topics:

```text
homelab
self-hosting
networking
security
runbook
documentation
cloudflare
reverse-proxy
infrastructure
itarock
```

Enable Issues and Projects. Discussions are optional. Keep Wiki disabled unless needed.

## GitHub Pages

Settings > Pages:

- Source: Deploy from branch
- Branch: `main`
- Folder: `/`

The site is static and does not need a build step.

## Branch Protection

Recommended rule for `main`:

- Require a pull request before merging.
- Require status checks to pass.
- Require the `Repository Health` workflow.
- Require conversation resolution.
- Do not allow force pushes.
- Do not allow deletions.

For a solo maintainer, keep admin bypass enabled until the workflow is stable.

## Labels

Recommended labels: `documentation`, `service`, `security`, `incident`, `flow-mapping`, `runbook`, `good first issue`.

## Organization Profile

To make the iTarock organization page look polished, create a separate public repository named `iTarock/.github`, then add `profile/README.md`. You can reuse the draft stored in `.github/profile/README.md` in this repository.
