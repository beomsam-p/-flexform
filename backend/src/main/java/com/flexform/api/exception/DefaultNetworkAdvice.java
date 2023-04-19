package com.flexform.api.exception;

import com.flexform.api.dto.ResponseContainer;
import com.flexform.api.dto.StatusDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.NoHandlerFoundException;

@RestControllerAdvice
public class DefaultNetworkAdvice {
    @ExceptionHandler({NoHandlerFoundException.class})
    public ResponseEntity<ResponseContainer> noHandlerFoundException(Exception e) {
        StatusDto statusDto = StatusDto.builder()
                .code(HttpStatus.NOT_FOUND.value())
                .message(e.getMessage())
                .build();
        ResponseContainer responseContainer = ResponseContainer.builder()
                .status(statusDto)
                .build();
        return new ResponseEntity<>(responseContainer, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({HttpRequestMethodNotSupportedException.class})
    public ResponseEntity<ResponseContainer> httpRequestMethodNotSupportedException(Exception e) {
        StatusDto statusDto = StatusDto.builder()
                .code(HttpStatus.METHOD_NOT_ALLOWED.value())
                .message(e.getMessage())
                .build();
        ResponseContainer responseContainer = ResponseContainer.builder()
                .status(statusDto)
                .build();
        return new ResponseEntity<>(responseContainer, HttpStatus.METHOD_NOT_ALLOWED);
    }
}
