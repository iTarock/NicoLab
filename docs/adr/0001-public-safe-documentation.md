# ADR 0001: Public-Safe Documentation

## Status

Accepted

## Context

NicoLab documents a real home lab. Publishing exact operational details can help others learn, but it can also expose unnecessary risk.

## Decision

NicoLab will publish architecture patterns, service categories, runbooks and sanitized examples. It will not publish secrets, exact private addressing, full firewall rules, private hostnames or recovery material.

## Consequences

- Documentation remains useful and shareable.
- Some examples are intentionally abstract.
- Private operational notes must live outside this public repository.
