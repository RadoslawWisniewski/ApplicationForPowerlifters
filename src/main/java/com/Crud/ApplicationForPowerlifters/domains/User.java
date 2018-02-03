package com.Crud.ApplicationForPowerlifters.domains;

import com.Crud.ApplicationForPowerlifters.Validators.Name;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "User")
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "first_name")
    @Pattern(regexp = "[a-zA-z]+",message = "Imie może zawierac tylko litery")
    private String firstName;


    @Column(name = "last_name")
    @Pattern(regexp = "[a-zA-z]+",message = "Nazwisko może zawierac tylko litery")
    private String lastName;

    @Column(name = "height")
    @Max(value = 250)
    @Min(value = 0)
    private Double height;

    @Column(name = "weight")
    @Max(value = 120)
    @Min(value = 50)
    private Integer weight;

    @Column(name = "benchpress")
    @Max(value = 300)
    @Min(value = 0)
    private Double benchpress;

    @Column(name = "deadlift")
    @Max(value = 400)
    @Min(value = 0)
    private Double deadlift;

    @Column(name = "squat")
    @Max(value = 350)
    @Min(value = 0)
    private Double squat;

    @Column(name = "wilks")
    private Double wilks;

    @Column(name = "summary")               //Sum of benchpress,deadlift,squat multiply by wilks
    private Double summary;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Double getBenchpress() {
        return benchpress;
    }

    public void setBenchpress(Double benchpress) {
        this.benchpress = benchpress;
    }

    public Double getDeadlift() {
        return deadlift;
    }

    public void setDeadlift(Double deadlift) {
        this.deadlift = deadlift;
    }

    public Double getSquat() {
        return squat;
    }

    public void setSquat(Double squat) {
        this.squat = squat;
    }

    public Double getWilks() {
        return wilks;
    }

    public void setWilks(Double wilks) {
        this.wilks = wilks;
    }

    public Double getSummary() {
        return summary;
    }

    public void setSummary(Double summary) {
        this.summary = summary;
    }
}