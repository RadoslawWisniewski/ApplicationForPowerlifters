package com.Crud.ApplicationForPowerlifters.cotroller;

import com.Crud.ApplicationForPowerlifters.domains.User;
import com.Crud.ApplicationForPowerlifters.domains.Wilks;
import com.Crud.ApplicationForPowerlifters.repostiory.UserRepository;
import com.Crud.ApplicationForPowerlifters.service.UserServiceImplement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserServiceImplement userServiceImplement;


    @RequestMapping(value = "/rank",method = RequestMethod.GET)
    List<User> getSortUser(){
        return userServiceImplement.getAllUserSort();
    }

    @RequestMapping(method = RequestMethod.GET)
    List<User> getAllUser(){
        return userServiceImplement.getAllUser();
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.GET)
    User getUser(@PathVariable("id") Long id){
       return userServiceImplement.getUserById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    User saveUser(@RequestBody @Valid User user){
        return userServiceImplement.createUser(user);
    }

    @RequestMapping(method = RequestMethod.PUT)
    User updateUser(@RequestBody @Valid User user){
        return userServiceImplement.updateUser(user);
    }

    @RequestMapping(value ="/{id}",method = RequestMethod.DELETE)
    void deleteUser(@PathVariable("id") Long id){
        userServiceImplement.deleteUser(id);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    void  deleteAllUser(){
        userServiceImplement.deleteAllUser();
    }
}
