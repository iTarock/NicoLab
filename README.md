# NicoLab

> Public documentation for the iTarock home lab: architecture, networking flows, security baseline, service inventory and operational runbooks.

[![Repository Health](https://github.com/iTarock/NicoLab/actions/workflows/validate.yml/badge.svg)](https://github.com/iTarock/NicoLab/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-5fd3b3.svg)](LICENSE)
[![Status: Lab](https://img.shields.io/badge/status-lab-f0b45b.svg)](docs/roadmap.md)

NicoLab is the place where iTarock documents how a small but serious self-hosted environment is designed, secured and maintained. It is not a dump of private infrastructure details. It is a curated, public version of the lab: useful enough to teach, structured enough to maintain, and careful enough not to expose sensitive information.

## What This Repository Contains

| Area | Purpose |
| --- | --- |
| [Architecture](docs/architecture.md) | System boundaries, logical zones, components and decision records. |
| [Networking](docs/networking.md) | DNS, reverse proxy, service exposure and traffic flow mapping. |
| [Security](docs/security.md) | Practical baseline for access, updates, backups, logging and exposure review. |
| [Services](docs/services.md) | Public inventory format and example service cards. |
| [Runbooks](docs/runbook.md) | Operational procedures for outages, updates and restores. |
| [Roadmap](docs/roadmap.md) | Current priorities, next steps and future lab ideas. |

## Live Site

The site is a static frontend and can be deployed through:

- GitHub Pages from `main` and `/`.
- Cloudflare Pages with no build command and `/` as output directory.

Local preview:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8765/`.

## Repository Structure

```text
.
├── .github/                 # Issue templates, PR template, CI workflow and org profile draft
├── assets/                  # Public visual assets
├── data/                    # Example inventories and public-safe structured data
├── docs/                    # Technical documentation
│   ├── adr/                 # Architecture Decision Records
│   ├── flows/               # Flow mapping examples
│   └── runbooks/            # Service-specific operational procedures
├── index.html               # Static homepage
├── script.js                # Theme, mobile nav, reveal and filters
├── style.css                # Responsive design system
└── README.md
```

## Public Documentation Policy

This repository intentionally avoids publishing:

- real private IP addresses;
- passwords, tokens, keys or recovery material;
- complete firewall rules;
- exact internal hostnames when they increase risk;
- anything that makes unauthorized access easier.

Public examples use placeholders such as `example.internal`, `10.0.0.0/24`, `service.example.com` and `REDACTED`.

## Project Standards

- Write documentation in English.
- Prefer diagrams and tables when they make operations easier to understand.
- Keep runbooks short enough to use during an incident.
- Track meaningful changes in [CHANGELOG.md](CHANGELOG.md).
- Use Architecture Decision Records for decisions that will matter later.

## Contributing

This project is maintained by iTarock, but issues and suggestions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Security

Please do not open public issues for vulnerabilities or accidentally exposed sensitive details. Follow [SECURITY.md](SECURITY.md).

## License

Code and documentation are released under the [MIT License](LICENSE), unless a file states otherwise.
