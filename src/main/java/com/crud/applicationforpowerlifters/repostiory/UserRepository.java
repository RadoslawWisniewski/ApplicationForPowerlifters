package com.crud.applicationforpowerlifters.repostiory;

import com.crud.applicationforpowerlifters.domains.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
