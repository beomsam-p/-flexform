package com.flexform.api.exception;

import com.flexform.api.dto.ResponseContainer;
import com.flexform.api.dto.StatusDto;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.util.stream.Collectors;

@RestControllerAdvice
public class ClientExceptionAdvice {
    @ExceptionHandler({NoHandlerFoundException.class})
    public ResponseEntity<ResponseContainer> notFound(Exception e) {
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
    public ResponseEntity<ResponseContainer> methodNotAllowed(Exception e) {
        StatusDto statusDto = StatusDto.builder()
                .code(HttpStatus.METHOD_NOT_ALLOWED.value())
                .message(e.getMessage())
                .build();
        ResponseContainer responseContainer = ResponseContainer.builder()
                .status(statusDto)
                .build();
        return new ResponseEntity<>(responseContainer, HttpStatus.METHOD_NOT_ALLOWED);
    }

    @ExceptionHandler({MissingServletRequestParameterException.class, MethodArgumentTypeMismatchException.class})
    public ResponseEntity<ResponseContainer> badRequest(Exception e) {
        StatusDto statusDto = StatusDto.builder()
                .code(HttpStatus.BAD_REQUEST.value())
                .message(e.getMessage())
                .build();
        ResponseContainer responseContainer = ResponseContainer.builder()
                .status(statusDto)
                .build();
        return new ResponseEntity<>(responseContainer, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler({MethodArgumentNotValidException.class})
    public ResponseEntity<ResponseContainer> methodArgumentNotValidException(MethodArgumentNotValidException e) {
        String messages = e.getBindingResult()
                .getAllErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .collect(Collectors.joining(", "));
        StatusDto statusDto = StatusDto.builder()
                .code(HttpStatus.BAD_REQUEST.value())
                .message(messages)
                .build();
        ResponseContainer responseContainer = ResponseContainer.builder()
                .status(statusDto)
                .build();
        return new ResponseEntity<>(responseContainer, HttpStatus.BAD_REQUEST);
    }


}
