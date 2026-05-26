# Runbook: Reverse Proxy

## Symptoms

- Public service returns `502` or `504`.
- TLS certificate error.
- Service works internally but not externally.
- Only one hostname fails while others work.

## Checks

1. Confirm DNS points to the expected edge.
2. Confirm the certificate is valid.
3. Check reverse proxy process or container status.
4. Check the upstream service status.
5. Read access and error logs.
6. Confirm no recent change modified routing rules.

## Recovery

1. Roll back the last proxy rule change if the failure started after a deploy.
2. Disable the affected public route if sensitive data could be exposed.
3. Restart only the affected service when possible.
4. Document the incident and prevention step.
