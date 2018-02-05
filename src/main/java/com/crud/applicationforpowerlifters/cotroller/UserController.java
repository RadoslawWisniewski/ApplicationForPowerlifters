package com.crud.applicationforpowerlifters.cotroller;

import com.crud.applicationforpowerlifters.domains.User;
import com.crud.applicationforpowerlifters.service.UserServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserServiceImp userServiceImp;


    @RequestMapping(value = "/rank",method = RequestMethod.GET)
    List<User> getSortUser(){
        return userServiceImp.getAllUserSort();
    }

    @RequestMapping(method = RequestMethod.GET)
    List<User> getAllUser(){
        return userServiceImp.getAllUser();
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.GET)
    User getUser(@PathVariable("id") Long id){
       return userServiceImp.getUserById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    User saveUser(@RequestBody @Valid User user){
        return userServiceImp.createUser(user);
    }

    @RequestMapping(method = RequestMethod.PUT)
    User updateUser(@RequestBody @Valid User user){
        return userServiceImp.updateUser(user);
    }

    @RequestMapping(value ="/{id}",method = RequestMethod.DELETE)
    void deleteUser(@PathVariable("id") Long id){
        userServiceImp.deleteUser(id);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    void  deleteAllUser(){
        userServiceImp.deleteAllUser();
    }
}
