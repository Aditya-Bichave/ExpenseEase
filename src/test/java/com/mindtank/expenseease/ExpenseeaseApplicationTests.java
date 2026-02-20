package com.mindtank.expenseease;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class ExpenseeaseApplicationTests {

    @Autowired
    private ApplicationContext applicationContext;

    @Test
    void contextLoads() {
        String openInView = applicationContext.getEnvironment().getProperty("spring.jpa.open-in-view");
        assertThat(openInView).isEqualTo("false");
    }

}
