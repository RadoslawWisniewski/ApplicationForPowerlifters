package com.Crud.ApplicationForPowerlifters.Validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class NameValidator implements ConstraintValidator<Name,String> {
    @Override
    public void initialize(Name name) {

    }

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        Pattern pattern =  Pattern.compile("[A-Za-z]+");
        Matcher matcher = pattern.matcher(s);
        return matcher.matches();
            }
}
