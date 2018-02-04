package com.Crud.ApplicationForPowerlifters.service;

import com.Crud.ApplicationForPowerlifters.domains.User;
import com.Crud.ApplicationForPowerlifters.domains.Wilks;
import com.Crud.ApplicationForPowerlifters.repostiory.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class UserServiceImplement implements UserService{

    @Autowired
    UserRepository userRepository;
    @Autowired
    Wilks wilks;


    @Override
    public List<User> getAllUserSort() {
        List<User> users;
        users = userRepository.findAll();
        Collections.sort(users, Comparator.comparing(User::getSummary).reversed());
        return users;
    }

    @Override
    public List<User> getAllUser() {
       return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
       return userRepository.findOne(id);
    }

    @Override
    public User createUser(User user) {
            user.setWilks(wilks.getListWilks().get(user.getWeight() - 50));
            //user.setSummary((user.getBenchpress() + user.getDeadlift() + user.getSquat()) * user.getWilks());
            return userRepository.save(user);
    }

    @Override
    public User updateUser(User user) {
        user.setWilks(wilks.getListWilks().get(user.getWeight() - 50));
        user.setSummary((user.getBenchpress() + user.getDeadlift() + user.getSquat()) * user.getWilks());
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        User user;
        if(userRepository.findOne(id) != null)
       userRepository.delete(id);
    }

    @Override
    public void deleteAllUser() {
        userRepository.deleteAll();
    }
}
