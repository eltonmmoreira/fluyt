package com.fluytcloud.auth.config;

import io.smallrye.config.ConfigMapping;

@ConfigMapping(prefix = "quarkus.oidc")
public interface OidcConfig {
    String authServerUrl();
    String clientId();

    CredentialsConfig credentials();

    interface CredentialsConfig {
        String secret();
    }
}
