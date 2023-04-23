package com.teameight.studyspots.repository;

import com.teameight.studyspots.entities.user;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<user, Integer> {

    user findByEmail(String email);
    user validateLogin(String username, String password);

    

}

