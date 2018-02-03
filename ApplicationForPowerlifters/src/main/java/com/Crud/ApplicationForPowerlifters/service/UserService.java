package com.Crud.ApplicationForPowerlifters.service;

import com.Crud.ApplicationForPowerlifters.domains.User;

import java.util.List;

public interface UserService {
    List<User>getAllUserSort();

    List<User> getAllUser();

    User getUserById(Long id);

    User createUser(User user);

    User updateUser(User user);

    void deleteUser(Long id);

    void deleteAllUser();
}
