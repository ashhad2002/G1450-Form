package com.ashhad.G1450Form.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.ashhad.G1450Form.repository.FormDataRepository;
import com.ashhad.G1450Form.model.FormData;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FormDataController {

    private final FormDataRepository formDataRepository;

    @Autowired
    public FormDataController(FormDataRepository formDataRepository) {
        this.formDataRepository = formDataRepository;
    }

    @PostMapping("/form-data")
    public void saveFormData(@RequestBody FormData formData) {
        // Save the form data to the database
        formDataRepository.save(formData);
    }
}