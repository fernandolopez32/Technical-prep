package com.example.technicalprep.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ExampleController {
    @GetMapping("/index")
    public String example(){
        return "index";
    }
}
