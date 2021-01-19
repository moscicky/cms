package pl.moscicki.cms

import org.springframework.context.annotation.Configuration

import org.springframework.data.rest.core.config.RepositoryRestConfiguration
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer
import org.springframework.stereotype.Component


@Configuration
class Configuration {

    @Component
    class ExposeEntityIdRestMvcConfiguration : RepositoryRestConfigurer {
        override fun configureRepositoryRestConfiguration(config: RepositoryRestConfiguration) {
            config.exposeIdsFor(Product::class.java)
        }
    }
}