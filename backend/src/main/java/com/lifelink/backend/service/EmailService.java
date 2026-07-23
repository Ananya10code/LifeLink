package com.lifelink.backend.service;

import com.lifelink.backend.entity.BloodRequest;
import com.lifelink.backend.entity.User;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendBloodRequestEmail(User donor, BloodRequest request) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(donor.getEmail());

        message.setSubject("🚨 Urgent Blood Request - " + request.getBloodGroup());

        message.setText(
                "Hello " + donor.getFullName() + ",\n\n" +

                        "A new blood request matches your blood group.\n\n" +

                        "Patient Name : " + request.getPatientName() + "\n" +
                        "Blood Group : " + request.getBloodGroup() + "\n" +
                        "Hospital : " + request.getHospital() + "\n" +
                        "City : " + request.getCity() + "\n" +
                        "Units Required : " + request.getUnits() + "\n" +
                        "Contact : " + request.getContact() + "\n\n" +

                        "Please login to LifeLink and volunteer.\n\n" +

                        "Thank you,\n" +
                        "LifeLink Team ❤️");

        mailSender.send(message);
    }
}
