package com.lifelink.backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Service
public class JwtService {

    // Secret key (we'll move it to application.properties later)
    private static final String SECRET = "LifeLinkSecretKeyForJwtAuthentication2026";

    private final Key key = new SecretKeySpec(
            SECRET.getBytes(StandardCharsets.UTF_8),
            SignatureAlgorithm.HS256.getJcaName());

    // Token valid for 24 hours
    private static final long EXPIRATION = 1000 * 60 * 60 * 24;

    public String generateToken(String email) {

        return Jwts.builder()
                .subject(email)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + EXPIRATION))
                .signWith(key)
                .compact();
    }

    public String extractEmail(String token) {

        Claims claims = Jwts.parser()
                .verifyWith((javax.crypto.SecretKey) key)
                .build()
                .parseSignedClaims(token)
                .getPayload();

        return claims.getSubject();
    }

}
