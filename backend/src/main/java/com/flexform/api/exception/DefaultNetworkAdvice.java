package com.flexform.api.exception;

import com.flexform.api.dto.ResponseContainer;
import com.flexform.api.dto.StatusDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.NoHandlerFoundException;

import javax.servlet.http.HttpServletResponse;

@RestControllerAdvice
public class DefaultNetworkAdvice {
//    @ExceptionHandler({ NoHandlerFoundException.class })
//    public ResponseEntity<ResponseContainer> noHandlerFoundException(Exception e, HttpServletResponse response) {
////        response.setHeader("Access-Control-Allow-Origin", "*");
////        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
////        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
////        response.setHeader("Access-Control-Max-Age", "3600");
//        return ResponseEntity.ok()
//                .body(ResponseContainer.builder()
//                        .status(StatusDto.builder()
//                                .code(HttpStatus.NOT_FOUND.value())
//                                .message(e.getMessage())
//                                .build())
//                        .build());
//    }

    @ExceptionHandler({ HttpRequestMethodNotSupportedException.class })
    public ResponseEntity<ResponseContainer> httpRequestMethodNotSupportedException(Exception e, HttpServletResponse response) {
//        response.setHeader("Access-Control-Allow-Origin", "*");
//        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//        response.setHeader("Access-Control-Max-Age", "3600");
        return ResponseEntity.ok().body(ResponseContainer.builder()
                .status(StatusDto.builder()
                        .code(HttpStatus.METHOD_NOT_ALLOWED.value())
                        .message(e.getMessage())
                        .build())
                .build());
    }
}
