package com.Crud.ApplicationForPowerlifters.repostiory;

import com.Crud.ApplicationForPowerlifters.domains.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
