# Runbook

## Service unreachable

1. Check DNS and external reachability.
2. Check reverse proxy and TLS certificate.
3. Check container or service state.
4. Read error logs and access logs.
5. Check disk space and storage.
6. If needed, disable public exposure and work privately.

## Service update

1. Read the changelog.
2. Verify a recent backup exists.
3. Note version before/after.
4. Update during a quiet window.
5. Test login, upload/download and main functions.
6. Write a short note in the changelog.

## Restore backup

1. Identify the latest valid backup.
2. Restore in a controlled environment whenever possible.
3. Verify data and permissions.
4. Bring the service back online only after minimum testing.
