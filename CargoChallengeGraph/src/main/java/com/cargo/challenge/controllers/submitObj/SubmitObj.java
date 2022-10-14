package com.cargo.challenge.controllers.submitObj;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(fluent = true)
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class SubmitObj implements Serializable {
    private static final long serialVersionUID = 191994992586364984L;

    private Double tow;
    private Double zfw;
    private Double law;
    private Double fwdLimit;
    private Double aftLimit;
    private Double toCg;
    private Double zfwCg;
    private Double ldCg;
}
