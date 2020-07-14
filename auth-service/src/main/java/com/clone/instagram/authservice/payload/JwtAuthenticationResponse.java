package com.clone.instagram.authservice.payload;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class JwtAuthenticationResponse {

    @NonNull
    private String accessToken;
    private boolean mfa;
}
