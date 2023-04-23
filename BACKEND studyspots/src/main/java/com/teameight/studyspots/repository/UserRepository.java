package com.teameight.studyspots.repository;
import java.util.Optional;

import com.teameight.studyspots.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);
    //Optional<User> getByPassword(String username, String password);
}

