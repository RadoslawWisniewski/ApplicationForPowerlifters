package com.Crud.ApplicationForPowerlifters.Validators;

import java.lang.annotation.Target;
import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;






@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = NameValidator.class)
public @interface Name {
    String message() default "Imię oraz nazwisko  moze zawierać tylko litery";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

}
