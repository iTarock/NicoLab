# Networking

## Service publishing flow

```mermaid
sequenceDiagram
  participant User as User
  participant CF as Cloudflare
  participant RP as Reverse Proxy
  participant App as Service
  participant Logs as Log/Monitoring
  User->>CF: HTTPS request
  CF->>RP: Proxy request
  RP->>App: Route by hostname
  App-->>RP: Response
  RP-->>CF: Response
  CF-->>User: HTTPS response
  RP->>Logs: Access/error log
```

## Domain checklist

- Domain or subdomain defined.
- DNS record documented.
- TLS active.
- Service behind a proxy, not directly exposed whenever possible.
- Access rules documented.
- Logs can be checked.

## Questions before exposing anything

- Does this service really need to be public?
- What data does it handle?
- Does it have strong authentication?
- Does a backup exist?
- Is there a quick way to disable public exposure?
