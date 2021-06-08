package pl.moscicki.cms

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.web.bind.annotation.CrossOrigin

@RepositoryRestResource(
    path = "promo",
    collectionResourceRel = "promo",
)
@CrossOrigin
interface PromoCodeRepository : MongoRepository<Promo, String>