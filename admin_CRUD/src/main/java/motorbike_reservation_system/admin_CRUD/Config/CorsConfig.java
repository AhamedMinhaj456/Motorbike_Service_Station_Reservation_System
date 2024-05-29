//package com.motorbike_reservation_system.backend.Authentication.Config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class CorsConfig {
//
//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/**")
//                        .allowedOrigins("http://localhost:3000","http://localhost:3001","http://localhost:3002") // Add your frontend URL
//                        .allowedMethods("GET", "POST", "PUT", "DELETE") // Add your allowed methods
//                        .allowedHeaders("*") // Allow all headers
//                        .allowCredentials(true); // Allow credentials (e.g., cookies)
//            }
//        };
//    }
//}


package motorbike_reservation_system.admin_CRUD.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000", "http://localhost:3001", "http://localhost:3002") // Add your frontend URL
                        .allowedMethods("GET", "POST", "PUT", "DELETE") // Add your allowed methods
                        .allowedHeaders("*") // Allow all headers
                        .allowCredentials(true); // Allow credentials (e.g., cookies)
            }
        };
    }

    @Bean
    public OncePerRequestFilter corsFilter() {
        return new OncePerRequestFilter() {
            @Override
            protected void doFilterInternal(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain filterChain) throws ServletException, IOException {
                response.addHeader("Access-Control-Allow-Origin", "*");
                response.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
                response.addHeader("Access-Control-Allow-Headers", "authorization, content-type, xsrf-token");
                response.addHeader("Access-Control-Expose-Headers", "xsrf-token");
                if ("OPTIONS".equals(request.getMethod())) {
                    response.setStatus(HttpServletResponse.SC_OK);
                } else {
                    filterChain.doFilter(request, response);
                }
            }
        };
    }
}
