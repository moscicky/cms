package pl.moscicki.cms

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.CrossOrigin

@SpringBootApplication
class CmsApplication

fun main(args: Array<String>) {
    runApplication<CmsApplication>(*args)
}
