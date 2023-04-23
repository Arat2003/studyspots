package com.teameight.studyspots.Controller;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.teameight.studyspots.repository.UserRepository;
import com.teameight.studyspots.entities.User;
@RestController
public class UserController{

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if(userRepository.findByEmail(user.getEmail()).isPresent()){
            return ResponseEntity.badRequest().build();
        }

        //save user to database
        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(user.getId());

    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        Optional<User> optionalUser = userRepository.findByEmail(user.getEmail());
        if (!optionalUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }

        User dbUser = optionalUser.get();


        if(!user.getPassword().equals(dbUser.getPassword())){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(dbUser.getId());
    }

    // @GetMapping("/login")
    // ResponseEntity<User> loginResponse() {

    //     return ResponseEntity.ok().build();

    // }

    // @GetMapping("/register")
    // ResponseEntity<User> registerResponse() {
    //     return ResponseEntity.ok().build();
    // }

}
