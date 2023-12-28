package com.ashhad.G1450Form.model;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import lombok.*;

@Entity
@Getter
@Setter
public class FormData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String givenName;
    private String streetName;
    private String city;
    private String state;
    private String zipCode;
    private String creditCardName;
    private String creditCardNumber;
    private String creditCardExpiry;
    private String creditCardHolderEmail;
    private String authorizedPaymentAmount;
    private String cardType;
    private String aptSteFlr;
    private String aptSteFlrNumber;
    private String phoneNumber;
    private String signature;

    public String toString() {
        return "FormData{" +
                "id=" + id +
                ", givenName='" + givenName + '\'' +
                ", streetName='" + streetName + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", zipCode='" + zipCode + '\'' +
                ", creditCardName='" + creditCardName + '\'' +
                ", creditCardNumber='" + creditCardNumber + '\'' +
                ", creditCardExpiry='" + creditCardExpiry + '\'' +
                ", creditCardHolderEmail='" + creditCardHolderEmail + '\'' +
                ", authorizedPaymentAmount='" + authorizedPaymentAmount + '\'' +
                ", cardType='" + cardType + '\'' +
                ", aptSteFlr='" + aptSteFlr + '\'' +
                ", aptSteFlrNumber='" + aptSteFlrNumber + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", signature='" + signature + '\'' +
                '}';
    }

}